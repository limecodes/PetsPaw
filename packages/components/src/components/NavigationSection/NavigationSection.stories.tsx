import React from 'react'
import { Story, Meta } from '@storybook/react'

import NavigationSection from './NavigationSection'

export default {
  title: 'Navigation/Tabs',
  component: NavigationSection,
} as Meta

const Template: Story = args => <NavigationSection {...args} />

export const NavigationTabs = Template.bind({})
