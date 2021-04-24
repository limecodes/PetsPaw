import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { ButtonStyleEnum } from '../../types'

interface ButtonStyleProps {
  primary?: boolean
  secondary?: boolean
  muted?: boolean
}

export interface ButtonProps extends ButtonStyleProps {
  label: string
}

const StyledButton = styled.button<ButtonStyleProps>`
  background: ${({
    theme: { primary, white, primaryMuted },
    secondary,
    muted,
  }) => (secondary ? primary : muted ? primaryMuted : white)};
  color: ${({ theme: { primary, white }, secondary, muted }) =>
    secondary || muted ? white : primary};
  border-radius: 10px;
  width: 138px;
  height: 36px;
`

const Button: FunctionComponent<ButtonProps> = ({
  label,
  primary,
  secondary,
  muted,
}) => (
  <StyledButton primary={primary} secondary={secondary} muted={muted}>
    {label}
  </StyledButton>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
}

Button.defaultProps = {
  primary: true,
}

export default Button
