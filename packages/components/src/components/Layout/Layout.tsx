import React, { FunctionComponent } from 'react'
import styled, { css } from 'styled-components'

import { Sidebar } from '../Sidebar'

export const sectionStyles = css`
  width: 50%;
  height: 100vh;
`

const StyledContainer = styled.main`
  display: flex;
`

const StyledSection = styled.section`
  ${sectionStyles}
`

const Layout: FunctionComponent = ({ children }) => (
  <StyledContainer>
    <Sidebar />
    {children}
  </StyledContainer>
)

export default Layout
