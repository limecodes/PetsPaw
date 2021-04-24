import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import { TabColorEnum } from '../../types'

import { Tab } from '../Tab'

import { VoteTable, PetBreeds, ImagesSearch } from '../../images'

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 75%;
`

const NavigationSection: FunctionComponent = () => (
  <NavigationContainer>
    <Tab background={VoteTable} label="Voting" color={TabColorEnum.PURPLE} />
    <Tab background={PetBreeds} label="Breeds" color={TabColorEnum.GREEN} />
    <Tab
      background={ImagesSearch}
      label="Gallery"
      color={TabColorEnum.YELLOW}
    />
  </NavigationContainer>
)

export default NavigationSection
