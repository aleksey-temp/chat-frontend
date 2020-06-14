import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;

  width: 96rem;
  height: 64rem;

  background-color: #3a3a3c;
  border-radius: 3px;
`

export const Aside = styled.aside`
  display: flex;
  flex-flow: column nowrap;

  width: 20rem;

  border-right: 1px solid rgba(0, 0, 0, 0.07);
`

export const listStyles = css`
  flex: 1;
`

export const View = styled.div`
  display: flex;
  flex-flow: column nowrap;

  flex: 1;
`

export const SendForm = styled.form`
  display: flex;

  padding: 1.6rem;
`

export const InputWrapper = styled.div`
  flex: 1;

  margin-right: 1.2rem;
`
