import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import { NavigationSection } from '../NavigationSection'

import { sectionStyles } from '../Layout'

const SidebarWrapper = styled.section`
  width: 50%;
  height: 100vh;
  padding-top: 4rem;
  padding-left: 6rem;
`

const StyledHeading = styled.h2`
  font-size: 2.5rem;
  letter-spacing: 0.2rem;
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

const Sidebar: FunctionComponent = () => (
  <SidebarWrapper>
    <h1>PetsPaw</h1>
    <StyledHeading>Hi Intern!</StyledHeading>
    <StyledParagraph>Welcome to MSI 2021 Front-end test</StyledParagraph>
    <StyledStrong>Lets start using The Dogs API</StyledStrong>
    <NavigationSection />
  </SidebarWrapper>
)

export default Sidebar
