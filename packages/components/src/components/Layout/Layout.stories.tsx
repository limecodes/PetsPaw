import React from 'react'
import { Story, Meta } from '@storybook/react'
import styled from 'styled-components'

import Layout, { sectionStyles } from './Layout'

import HeroPic from '../../images/HeroPic'

export default {
  title: 'Layout/Main',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const RightSection = styled.section`
  ${sectionStyles}
  padding: 2rem;
  background-image: url(${HeroPic});
  background-size: 100%;
  background-repeat: no-repeat;
`

const StyledUselessBackground = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1.25rem;
  background-color: ${({ theme: { primaryMuted } }) => primaryMuted};
`

const Template: Story = args => (
  <Layout {...args}>
    <RightSection>
      <StyledUselessBackground />
    </RightSection>
  </Layout>
)
export const BasicLayout = Template.bind({})
