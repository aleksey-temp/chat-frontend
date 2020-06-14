import { useSelector } from 'react-redux'

import { socketSelector } from 'redux/selectors/socket.selectors'
import { usernameSelector } from 'redux/selectors/user.selectors'
import { Participant } from 'interfaces/participant.interface'
import { Message } from 'interfaces/message.interface'
import { Events } from 'constants/Events'

type Callback = (room: {
  id: string
  name: string
  participants: Participant[]
  messages: Message[]
}) => void

export const useInitialJoin = () => {
  const socket = useSelector(socketSelector)
  const username = useSelector(usernameSelector)

  const joinDefaultRoom = (callback: Callback) => {
    socket?.emit(Events.INITIAL_JOIN_ROOM, username, callback)
  }

  return { joinDefaultRoom }
}
