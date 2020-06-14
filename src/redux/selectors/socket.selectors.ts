import { createSelector } from 'reselect'

import { State } from 'redux/state'

const rootSelector = (state: State) => state.socket

export const socketSelector = createSelector(
  rootSelector,
  socketState => socketState.socket,
)

export const connectingSelector = createSelector(
  rootSelector,
  socketState => socketState.connecting,
)
