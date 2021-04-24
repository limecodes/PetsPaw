import React, { FunctionComponent } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeContext } from '@petspaw/components'

import Home from './pages/Home'

const App: FunctionComponent = (): JSX.Element => (
  <ThemeContext>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </ThemeContext>
)

export default App
