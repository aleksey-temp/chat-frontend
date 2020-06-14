import { createSelector } from 'reselect'

import { State } from 'redux/state'

const rootSelector = (state: State) => state.user

export const usernameSelector = createSelector(
  rootSelector,
  userState => userState.username,
)
