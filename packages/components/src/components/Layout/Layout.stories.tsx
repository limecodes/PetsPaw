import React from 'react'
import { Story, Meta } from '@storybook/react'

import Layout from './Layout'

export default {
  title: 'Layout/Main',
  component: Layout,
} as Meta

const Template: Story = args => <Layout {...args} />
export const BasicLayout = Template.bind({})
