import { defaultUserState, UserState } from 'redux/state/user.state'
import { UserAction, UserActionTypes } from 'redux/actions/user.actions'

export const userReducer = (
  state = defaultUserState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_USERNAME:
      return { ...state, username: action.payload }

    default:
      return state
  }
}
