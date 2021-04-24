import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button } from '../Button'

export interface TabProps {
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

const StyledTab = styled.div<TabProps>`
  margin-bottom: 0.5rem;
  width: 138px;
  height: 198px;
  background-color: #b4b7ff;
  background-image: url(${({ background }) => background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 75%;
  border: 4px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  border-radius: 20px;
`

const Tab: FunctionComponent<TabProps> = ({ background }) => (
  <StyledTabContainer>
    <StyledTab background={background} />
    <Button label="Voting" nonButton />
  </StyledTabContainer>
)

Tab.propTypes = {
  background: PropTypes.string.isRequired,
}

export default Tab
