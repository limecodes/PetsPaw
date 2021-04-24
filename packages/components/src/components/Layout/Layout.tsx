import React, { FunctionComponent } from 'react'
import styled, { css } from 'styled-components'

import { Tab } from '../Tab'
import HeroPic from '../../assets/HeroPic'

const sectionStyles = css`
  width: 50%;
  height: 100vh;
`

const StyledContainer = styled.main`
  display: flex;
`

const StyledSection = styled.section`
  ${sectionStyles}
`

const LeftSection = styled.section`
  ${sectionStyles}
  padding-top: 4rem;
  padding-left: 6rem;
`

const RightSection = styled.section`
  ${sectionStyles}
  padding: 2rem;
  background-image: url(${HeroPic});
  background-size: 100%;
  background-repeat: no-repeat;
`

const StyledParagraph = styled.p`
  margin-bottom: 4rem;
  color: ${({ theme: { textLight } }) => textLight};
  font-weight: 400;
  font-size: 1.25rem;
`

const StyledStrong = styled.strong`
  display: block;
  line-height: 7rem;
  font-size: 1.25rem;
`

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 75%;
`

const StyledHeading = styled.h2`
  font-size: 2.5rem;
  letter-spacing: 0.2rem;
`

const StyledUselessBackground = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1.25rem;
  background-color: ${({ theme: { primaryMuted } }) => primaryMuted};
`

const Layout: FunctionComponent = () => (
  <StyledContainer>
    <LeftSection>
      <h1>PetsPaw</h1>
      <StyledHeading>Hi Intern!</StyledHeading>
      <StyledParagraph>Welcome to MSI 2021 Front-end test</StyledParagraph>
      <StyledStrong>Lets start using The Dogs API</StyledStrong>
      <NavigationContainer>
        <Tab />
        <Tab />
        <Tab />
      </NavigationContainer>
    </LeftSection>
    <RightSection>
      <StyledUselessBackground />
    </RightSection>
  </StyledContainer>
)

export default Layout
