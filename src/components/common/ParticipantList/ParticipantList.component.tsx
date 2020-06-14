import React from 'react'
import { FlattenSimpleInterpolation } from 'styled-components'

import { Participant } from 'interfaces/participant.interface'
import { Title, List, ListItem } from './ParticipantList.styled'

type Props = {
  participants: Participant[]
  css?: FlattenSimpleInterpolation
}

export const ParticipantList: React.FC<Props> = ({ participants, css }) => {
  return (
    <>
      <Title>Participants</Title>
      <List css={css}>
        {participants.map(p => (
          <ListItem key={p.id}>{p.username}</ListItem>
        ))}
      </List>
    </>
  )
}
