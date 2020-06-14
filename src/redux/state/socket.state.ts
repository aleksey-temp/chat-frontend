export type SocketState = {
  socket: SocketIOClient.Socket | null
  connecting: boolean
}

export const defaultSocketState: SocketState = {
  socket: null,
  connecting: false,
}
