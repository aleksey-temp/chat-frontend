import React, { useEffect, useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Window } from 'components/common/Window'
import { ParticipantList } from 'components/common/ParticipantList'
import { Button } from 'components/common/Button'
import { Input } from 'components/common/Input'
import { MessageList } from 'components/common/MessageList'
import {
  addParticipant,
  removeParticipant,
  addNewMessage,
} from 'redux/actions/chat.actions'
import {
  participantsSelector,
  messagesSelector,
  roomNameSelector,
} from 'redux/selectors/chat.selectors'
import { socketSelector } from 'redux/selectors/socket.selectors'
import { usernameSelector } from 'redux/selectors/user.selectors'
import { Participant } from 'interfaces/participant.interface'
import { Message } from 'interfaces/message.interface'
import { Events } from 'constants/Events'
import {
  Wrapper,
  Aside,
  View,
  listStyles,
  SendForm,
  InputWrapper,
} from './Chat.styled'

export const Chat: React.FC = () => {
  const dispatch = useDispatch()

  const socket = useSelector(socketSelector)
  const participants = useSelector(participantsSelector)
  const messages = useSelector(messagesSelector)
  const roomName = useSelector(roomNameSelector)
  const username = useSelector(usernameSelector)

  const [message, setMessage] = useState('')

  useEffect(() => {
    socket!.on(Events.USER_JOINED_ROOM, onUserJoinedRoom)

    socket!.on(Events.USER_LEFT_ROOM, onUserLeftRoom)

    socket!.on(Events.NEW_MESSAGE_IN_ROOM, onNewMessage)
  }, [])

  const onUserJoinedRoom = useCallback(
    (participant: Participant) => {
      dispatch(addParticipant(participant))
    },
    [dispatch],
  )

  const onUserLeftRoom = useCallback(
    (id: string) => {
      dispatch(removeParticipant(id))
    },
    [dispatch],
  )

  const onNewMessage = useCallback(
    (message: Message) => {
      dispatch(addNewMessage(message))
    },
    [dispatch],
  )

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      let msg = message.trim()

      if (!msg.length) return

      socket!.emit(Events.NEW_MESSAGE, {
        roomName,
        from: username,
        message: msg,
      })

      setMessage('')
    },
    [message, roomName, username, socket],
  )

  return (
    <Window>
      <Wrapper>
        <Aside>
          {participants !== null && (
            <ParticipantList participants={participants} css={listStyles} />
          )}
        </Aside>
        <View>
          {messages !== null && (
            <MessageList
              messages={messages}
              css={listStyles}
              username={username!}
            ></MessageList>
          )}
          <SendForm onSubmit={onSubmit}>
            <InputWrapper>
              <Input
                labelText="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </InputWrapper>
            <Button type="submit" disabled={!message.length}>
              Send
            </Button>
          </SendForm>
        </View>
      </Wrapper>
    </Window>
  )
}
