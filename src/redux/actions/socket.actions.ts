import io from 'socket.io-client'
import { Dispatch } from 'redux'

import { Action } from 'types/redux.types'

export enum SocketActionTypes {
  SOCKET_CONNECT_START = '@@socket/socket-connect-start',
  SOCKET_CONNECT_SUCCESS = '@@socket/socket-connect-success',
  SOCKET_CONNECT_ERROR = '@@socket/socket-connect-error',
}

export type SocketConnectStartAction = Action<
  SocketActionTypes.SOCKET_CONNECT_START
>
export type SocketConnectSuccessAction = Action<
  SocketActionTypes.SOCKET_CONNECT_SUCCESS,
  SocketIOClient.Socket
>
export type SocketConnectErrorAction = Action<
  SocketActionTypes.SOCKET_CONNECT_ERROR
>

export type SocketAction =
  | SocketConnectStartAction
  | SocketConnectSuccessAction
  | SocketConnectErrorAction

export const socketConnectStart = (): SocketConnectStartAction => ({
  type: SocketActionTypes.SOCKET_CONNECT_START,
  payload: undefined,
})

export const socketConnectSuccess = (
  socket: SocketIOClient.Socket,
): SocketConnectSuccessAction => ({
  type: SocketActionTypes.SOCKET_CONNECT_SUCCESS,
  payload: socket,
})

export const socketConnectError = (): SocketConnectErrorAction => ({
  type: SocketActionTypes.SOCKET_CONNECT_ERROR,
  payload: undefined,
})

export const socketConnect = () => (dispatch: Dispatch) => {
  dispatch(socketConnectStart())

  try {
    const socket = io('http://localhost:4000')

    dispatch(socketConnectSuccess(socket))
  } catch (e) {
    console.log('Error during socket connection:', e)

    dispatch(socketConnectError())
  }
}
