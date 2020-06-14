import { defaultChatState, ChatState } from 'redux/state/chat.state'
import { ChatAction, ChatActionTypes } from 'redux/actions/chat.actions'

export const chatReducer = (
  state = defaultChatState,
  action: ChatAction,
): ChatState => {
  switch (action.type) {
    case ChatActionTypes.SET_ROOM:
      return {
        ...state,
        roomName: action.payload.roomName,
        participants: action.payload.participants,
        messages: action.payload.messages,
      }

    case ChatActionTypes.ADD_PARTICIPANT:
      return {
        ...state,
        participants: [...state.participants!, action.payload],
      }

    case ChatActionTypes.REMOVE_PARTICIPANT:
      return {
        ...state,
        participants: state.participants!.filter(p => p.id !== action.payload),
      }

    case ChatActionTypes.ADD_NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages!, action.payload],
      }

    default:
      return state
  }
}
