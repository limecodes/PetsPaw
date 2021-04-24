import React, { FunctionComponent } from 'react'
import { ThemeContext, Layout } from '@petspaw/components'

const App: FunctionComponent = (): JSX.Element => (
  <ThemeContext>
    <Layout />
  </ThemeContext>
)

export default App
