import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import VoteTable from '../../assets/vote-table.svg'

import { Button } from '../Button'

interface StyledTabProps {
  background: string
}

const StyledTabContainer = styled.button`
  max-width: 138px;

  span {
    line-height: 36px;
    -webkit-appearance: button;
  }

  &:hover {
    span {
      background-color: ${({ theme: { primaryMuted } }) => primaryMuted};
    }
  }

  &:active,
  &:focus {
    span {
      background-color: ${({ theme: { primary } }) => primary};
      color: ${({ theme: { white } }) => white};
    }
  }
`

const StyledTab = styled.div<StyledTabProps>`
  margin-bottom: 0.5rem;
  width: 138px;
  height: 198px;
  background-color: #b4b7ff;
  background-image: url(${({ background }) => background});
  background-position: center;
  background-repeat: no-repeat;
  border: 4px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  border-radius: 20px;
`

const Tab: FunctionComponent = () => (
  <StyledTabContainer>
    <StyledTab background={VoteTable} />
    <Button label="Voting" nonButton />
  </StyledTabContainer>
)

export default Tab
