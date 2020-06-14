import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'

import { rootReducer } from 'redux/reducers'

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk)),
)
