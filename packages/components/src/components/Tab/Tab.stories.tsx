import React from 'react'
import { Story, Meta } from '@storybook/react'

import VoteTable from '../../images/vote-table.svg'

import Tab, { TabProps } from './Tab'

export default {
  title: 'Navigation/Tab',
  component: Tab,
}

const Template: Story<TabProps> = args => <Tab {...args} />
export const Basic = Template.bind({})
Basic.args = {
  background: VoteTable,
  label: 'Voting',
}
