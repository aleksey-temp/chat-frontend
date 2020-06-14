import { Action } from 'types/redux.types'
import { Participant } from 'interfaces/participant.interface'
import { Message } from 'interfaces/message.interface'

export enum ChatActionTypes {
  SET_ROOM = '@@chat/set-room',
  ADD_PARTICIPANT = '@@chat/add-participant',
  REMOVE_PARTICIPANT = '@@chat/remove-participant',
  ADD_NEW_MESSAGE = '@@chat/add-new-message',
}

export type SetRoomAction = Action<
  ChatActionTypes.SET_ROOM,
  { roomName: string; participants: Participant[]; messages: Message[] }
>

export type AddParticipantAction = Action<
  ChatActionTypes.ADD_PARTICIPANT,
  Participant
>

export type RemoveParticipantAction = Action<
  ChatActionTypes.REMOVE_PARTICIPANT,
  string
>

export type AddNewMessageAction = Action<
  ChatActionTypes.ADD_NEW_MESSAGE,
  Message
>

export type ChatAction =
  | SetRoomAction
  | AddParticipantAction
  | RemoveParticipantAction
  | AddNewMessageAction

export const setRoom = (
  roomName: string,
  participants: Participant[],
  messages: Message[],
): SetRoomAction => ({
  type: ChatActionTypes.SET_ROOM,
  payload: { roomName, participants, messages },
})

export const addParticipant = (
  participant: Participant,
): AddParticipantAction => ({
  type: ChatActionTypes.ADD_PARTICIPANT,
  payload: participant,
})

export const removeParticipant = (id: string): RemoveParticipantAction => ({
  type: ChatActionTypes.REMOVE_PARTICIPANT,
  payload: id,
})

export const addNewMessage = (message: Message): AddNewMessageAction => ({
  type: ChatActionTypes.ADD_NEW_MESSAGE,
  payload: message,
})
