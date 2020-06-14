import styled, { FlattenSimpleInterpolation } from 'styled-components'

type ListProps = {
  css?: FlattenSimpleInterpolation
}

export const Title = styled.h3`
  margin-top: 1.6rem;
  padding-left: 3.2rem;

  font-size: 1.6rem;
  font-weight: 500;
`

export const List = styled.ul<ListProps>`
  height: 42rem;

  padding: 1.2rem 1.6rem;

  list-style: none;
  overflow: auto;

  ${props => props.css};
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  padding: 1.2rem 1.6rem;

  font-size: 1.4rem;

  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 3px;

  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }

  &::before {
    content: '';

    margin-right: 0.8rem;

    width: 0.7rem;
    height: 0.7rem;

    background-color: #30d158;
    border-radius: 0.35rem;
  }
`
