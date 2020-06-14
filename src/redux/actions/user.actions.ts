import { Action } from 'types/redux.types'

export enum UserActionTypes {
  SET_USERNAME = '@@user/set-username',
}

export type SetUsernameAction = Action<UserActionTypes.SET_USERNAME, string>

export type UserAction = SetUsernameAction

export const setUsername = (username: string): SetUsernameAction => ({
  type: UserActionTypes.SET_USERNAME,
  payload: username,
})
