import { defaultSocketState, SocketState } from 'redux/state/socket.state'
import { SocketAction, SocketActionTypes } from 'redux/actions/socket.actions'

export const socketReducer = (
  state = defaultSocketState,
  action: SocketAction,
): SocketState => {
  switch (action.type) {
    case SocketActionTypes.SOCKET_CONNECT_START:
      return { ...state, connecting: true }

    case SocketActionTypes.SOCKET_CONNECT_SUCCESS:
      return { ...state, socket: action.payload, connecting: false }

    case SocketActionTypes.SOCKET_CONNECT_ERROR:
      return { ...state, connecting: false }

    default:
      return state
  }
}
