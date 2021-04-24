import React from 'react'
import { StoryContext, StoryGetter, StoryWrapper } from '@storybook/addons'
import ThemeContext from '../src/contexts/ThemeContext'

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Controls lightmode/darkmode',
    default: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
}

const withThemeProvider = (Story, context) => (
  <ThemeContext>
    <Story {...context} />
  </ThemeContext>
)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [withThemeProvider]
