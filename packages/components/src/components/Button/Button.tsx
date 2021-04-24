import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export interface ButtonProps {
  label: string
}

const StyledButton = styled.button`
  background: #ff868e;
  border-radius: 10px;
  width: 138px;
  height: 36px;
`

const Button: FunctionComponent<ButtonProps> = ({ label }) => (
  <StyledButton>{label}</StyledButton>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
}

export default Button
