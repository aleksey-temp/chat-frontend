import { combineReducers } from 'redux'

import { socketReducer } from 'redux/reducers/socket.reducer'
import { userReducer } from 'redux/reducers/user.reducer'
import { chatReducer } from 'redux/reducers/chat.reducer'

export const rootReducer = combineReducers({
  socket: socketReducer,
  user: userReducer,
  chat: chatReducer,
})
