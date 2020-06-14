import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useDebounce } from 'react-use'

import { Window } from 'components/common/Window'
import { Input } from 'components/common/Input'
import { Button } from 'components/common/Button'
import { useValidateUsername } from 'hooks/useValidateUsername'
import { useInitialJoin } from 'hooks/useInitialJoin'
import { setUsername as setUsernameActionCreator } from 'redux/actions/user.actions'
import { setRoom } from 'redux/actions/chat.actions'
import { Wrapper, InputWrapper, ButtonWrapper } from './JoinForm.styled'

export const JoinForm: React.FC = () => {
  const [username, setUsername] = useState('')
  const { validateUsername, valid, message } = useValidateUsername()
  const dispatch = useDispatch()
  const { joinDefaultRoom } = useInitialJoin()

  useDebounce(
    () => {
      validateUsername(username)
    },
    300,
    [username, validateUsername],
  )

  useDebounce(
    () => {
      if (valid === true) {
        dispatch(setUsernameActionCreator(username))
      }
    },
    300,
    [valid, username, dispatch],
  )

  const onJoinClick = useCallback(() => {
    joinDefaultRoom(roomInfo => {
      dispatch(setRoom(roomInfo.name, roomInfo.participants, roomInfo.messages))
    })
  }, [joinDefaultRoom, dispatch])

  return (
    <Window>
      <Wrapper>
        <InputWrapper>
          <Input
            labelText="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            message={message || ''}
            success={!!valid}
          />
        </InputWrapper>
        <ButtonWrapper>
          <Button onClick={onJoinClick} disabled={!valid}>
            Join
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </Window>
  )
}
