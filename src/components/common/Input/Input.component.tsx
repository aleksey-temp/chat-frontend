import React, { useState, useCallback } from 'react'

import {
  Wrapper,
  StyledLabel,
  StyledInput,
  InputWrapper,
  Tooltip,
} from './Input.styled'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  labelText: string
  message?: string
  success?: boolean
  ref?: any
}

export const Input: React.FC<Props> = ({
  labelText,
  message,
  success,
  onFocus,
  onChange,
  ...props
}) => {
  const [touchedOrNotEmpty, setTouchedOrNotEmpty] = useState(false)

  const _onFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setTouchedOrNotEmpty(true)

      onFocus && onFocus(e)
    },
    [onFocus],
  )

  const _onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTouchedOrNotEmpty(e.target.value !== '')

      onChange && onChange(e)
    },
    [onChange],
  )

  return (
    <Wrapper>
      <StyledLabel htmlFor={labelText}>{labelText}</StyledLabel>
      <InputWrapper>
        <StyledInput
          id={labelText}
          onFocus={_onFocus}
          onChange={_onChange}
          {...props}
        />
        <Tooltip
          shown={message !== undefined && touchedOrNotEmpty}
          success={success}
        >
          {message}
        </Tooltip>
      </InputWrapper>
    </Wrapper>
  )
}
