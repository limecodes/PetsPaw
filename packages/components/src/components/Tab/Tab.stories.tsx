import React from 'react'
import { Story, Meta } from '@storybook/react'

import Tab from './Tab'

export default {
  title: 'Navigation/Tab',
  component: Tab,
}

const Template: Story = args => <Tab {...args} />
export const Basic = Template.bind({})
