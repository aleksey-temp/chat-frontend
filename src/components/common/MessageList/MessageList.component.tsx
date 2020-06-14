import React, { useRef, useEffect } from 'react'
import { FlattenSimpleInterpolation } from 'styled-components'

import { Message } from 'interfaces/message.interface'
import { Title, List, ListItem, Content, Sender } from './MessageList.styled'

type Props = {
  messages: Message[]
  username: string
  css?: FlattenSimpleInterpolation
}

export const MessageList: React.FC<Props> = ({ messages, username, css }) => {
  const liRef = useRef<HTMLLIElement | null>(null)

  useEffect(() => {
    liRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <>
      <Title>Messages</Title>
      <List css={css}>
        {messages.map(m => (
          <ListItem key={m.id} alignRight={m.from === username}>
            <Content>{m.message}</Content>
            {m.from !== username && <Sender>{m.from}</Sender>}
          </ListItem>
        ))}
        <li ref={liRef}></li>
      </List>
    </>
  )
}
