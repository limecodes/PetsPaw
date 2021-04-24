import React from 'react'
import { Story, Meta } from '@storybook/react'

import Sidebar from './Sidebar'

export default {
  title: 'Layout/Sidebar',
  component: Sidebar,
} as Meta

const Template: Story = args => <Sidebar {...args} />

export const MainSidebar = Template.bind({})
