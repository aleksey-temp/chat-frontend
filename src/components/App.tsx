import React from 'react'
import { useEffectOnce } from 'react-use'
import { useSelector, useDispatch } from 'react-redux'

import { Wrapper } from 'components/common/Wrapper'
import { JoinForm } from 'components/JoinForm'
import { Chat } from 'components/Chat'
import { socketConnect } from 'redux/actions/socket.actions'
import { socketSelector } from 'redux/selectors/socket.selectors'
import { roomNameSelector } from 'redux/selectors/chat.selectors'
import { AppGlobalStyles } from './App.styles'

export const App: React.FC = () => {
  const roomName = useSelector(roomNameSelector)
  const socket = useSelector(socketSelector)
  const dispatch = useDispatch()

  useEffectOnce(() => {
    dispatch(socketConnect())
  })

  if (socket === null) {
    return null
  }

  return (
    <>
      <AppGlobalStyles />
      <Wrapper>{roomName === null ? <JoinForm /> : <Chat />}</Wrapper>
    </>
  )
}
