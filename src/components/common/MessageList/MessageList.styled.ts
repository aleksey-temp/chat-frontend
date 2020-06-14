import styled, { FlattenSimpleInterpolation } from 'styled-components'

type ListProps = {
  css?: FlattenSimpleInterpolation
}

type ListItemProps = {
  alignRight?: boolean
}

export const Title = styled.h3`
  margin: 1.6rem 3.2rem;

  font-size: 1.6rem;
  font-weight: 500;
`

export const List = styled.ul<ListProps>`
  display: flex;
  flex-flow: column nowrap;

  padding: 0 3.2rem;

  list-style: none;
  overflow: auto;

  ${props => props.css};
`

export const ListItem = styled.li<ListItemProps>`
  display: flex;
  flex-flow: column nowrap;

  max-width: 24rem;

  align-self: ${props => (props.alignRight ? 'flex-end' : 'flex-start')};

  padding: 0.6rem 1.2rem;

  background-color: ${props => (props.alignRight ? '#469cf2' : '#0a84ff')};
  border-radius: 8px;

  font-size: 1.4rem;
  line-height: 1.2;

  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`

export const Content = styled.p``

export const Sender = styled.span`
  align-self: flex-end;

  font-size: 1.2rem;
  font-weight: 500;
`
