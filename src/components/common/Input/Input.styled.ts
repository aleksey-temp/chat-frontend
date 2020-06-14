import styled from 'styled-components'

type TooltipProps = {
  shown?: boolean
  success?: boolean
}

export const Wrapper = styled.div`
  display: flex;
`

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;

  padding: 0 1.2rem;

  font-size: 1.4rem;

  background-color: #505052;
  border-radius: 3px 0 0 3px;
`

export const InputWrapper = styled.div`
  flex: 1;

  position: relative;
`

export const StyledInput = styled.input`
  display: block;
  width: 100%;

  padding: 0.8rem 1.6rem;

  font-family: inherit;
  font-size: 1.4rem;
  line-height: 1;
  color: currentColor;

  background-color: #48484a;
  box-shadow: none;
  border: none;
  border-left: 1px solid transparent;
  border-radius: 0 3px 3px 0;
  transition: background-color 0.2s ease, border-left-color 0.2s ease;

  &:focus {
    outline: none;

    background-color: #505052;
    border-left: 1px solid #606062;
  }
`

export const Tooltip = styled.span<TooltipProps>`
  display: block;

  margin-left: 1rem;
  padding: 0.4rem 0.8rem;

  position: absolute;
  top: calc(100% + 0.8rem);

  background-color: ${props => (props.success ? '#30d158' : '#ff453a')};
  border-radius: 3px;

  opacity: ${props => (props.shown ? 1 : 0)};

  transform: ${props => `scale(${props.shown ? 1 : 0})`};

  transition: transform 0.2s ease, opacity 0.2s ease;
  backface-visibility: hidden;

  &::before {
    content: '';

    display: block;

    margin-left: -0.5rem;

    position: absolute;
    top: -0.5rem;
    left: 50%;

    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid
      ${props => (props.success ? '#30d158' : '#ff453a')};
  }
`
