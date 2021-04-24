import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from '../../constants/colors'
import { TabColorEnum } from '../../types'

import { Button } from '../Button'

interface TabStyleProps {
  background: string
  color?: string
}

export interface TabProps extends TabStyleProps {
  label: string
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

const StyledTab = styled.div<TabStyleProps>`
  margin-bottom: 0.5rem;
  width: 138px;
  height: 198px;
  background-color: ${({ color }) => colors[color]};
  background-image: url(${({ background }) => background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 75%;
  border: 4px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  border-radius: 20px;
`

const Tab: FunctionComponent<TabProps> = ({ background, label, color }) => (
  <StyledTabContainer>
    <StyledTab background={background} color={color} />
    <Button label={label} nonButton />
  </StyledTabContainer>
)

Tab.propTypes = {
  background: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(Object.values(TabColorEnum)),
}

Tab.defaultProps = {
  color: TabColorEnum.PURPLE,
}

export default Tab
