import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledContainer = styled.main`
  display: flex;
`

const StyledSection = styled.section`
  width: 50%;
  height: 100vh;
`

const Layout: FunctionComponent = () => (
  <StyledContainer>
    <StyledSection>Left</StyledSection>
    <StyledSection>Right</StyledSection>
  </StyledContainer>
)

export default Layout
