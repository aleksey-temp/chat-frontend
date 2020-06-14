import { SocketState, defaultSocketState } from './socket.state'
import { UserState, defaultUserState } from './user.state'
import { ChatState, defaultChatState } from './chat.state'

export type State = {
  socket: SocketState
  user: UserState
  chat: ChatState
}

export const defaultState: State = {
  socket: defaultSocketState,
  user: defaultUserState,
  chat: defaultChatState,
}
