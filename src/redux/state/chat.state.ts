import { Message } from 'interfaces/message.interface'
import { Participant } from 'interfaces/participant.interface'

export type ChatState = {
  roomName: string | null
  messages: Message[] | null
  participants: Participant[] | null
}

export const defaultChatState: ChatState = {
  roomName: null,
  messages: null,
  participants: null,
}
