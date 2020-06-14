import styled, { css } from 'styled-components'

type Props = {
  fluid?: boolean
}

export const Button = styled.button<Props>`
  display: inline-block;

  padding: 0.8rem 2rem;

  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 500;
  color: currentColor;

  background-color: #0a84ff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.2s ease, opacity 0.2s ease;

  ${props =>
    props.fluid &&
    css`
      width: 100%;
    `};

  &:hover {
    background-color: #0978e8;
  }

  &:focus {
    outline: none;

    background-color: #0978e8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
