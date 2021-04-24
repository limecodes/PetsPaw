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
  nonButton?: boolean
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
  text-transform: uppercase;
`

const Button: FunctionComponent<ButtonProps> = ({
  label,
  primary,
  secondary,
  muted,
  nonButton,
}) => (
  <StyledButton
    as={nonButton ? 'span' : 'button'}
    primary={primary}
    secondary={secondary}
    muted={muted}
  >
    {label}
  </StyledButton>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  muted: PropTypes.bool,
  nonButton: PropTypes.bool,
}

Button.defaultProps = {
  primary: true,
  nonButton: false,
}

export default Button
