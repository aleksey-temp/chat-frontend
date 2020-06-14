import { createSelector } from 'reselect'

import { State } from 'redux/state'

const rootSelector = (state: State) => state.chat

export const roomNameSelector = createSelector(
  rootSelector,
  chatState => chatState.roomName,
)

export const messagesSelector = createSelector(
  rootSelector,
  chatState => chatState.messages,
)

export const participantsSelector = createSelector(
  rootSelector,
  chatState => chatState.participants,
)
