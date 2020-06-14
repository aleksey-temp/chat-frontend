import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { socketSelector } from 'redux/selectors/socket.selectors'
import { Events } from 'constants/Events'

type ValidationResult = {
  valid: boolean
  message: string
}

export const useValidateUsername = () => {
  const socket = useSelector(socketSelector)
  const [valid, setValid] = useState<boolean | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const validateUsername = useCallback(
    (username: string) => {
      socket?.emit(Events.VALIDATE_USERNAME, username)
    },
    [socket],
  )

  const handleValidationResult = useCallback((result: ValidationResult) => {
    setValid(result.valid)
    setMessage(result.message)
  }, [])

  useEffect(() => {
    socket?.on(Events.VALIDATE_USERNAME_SUCCESS, handleValidationResult)

    socket?.on(Events.VALIDATE_USERNAME_FAIL, handleValidationResult)
  }, [socket, handleValidationResult])

  return { validateUsername, valid, message }
}
