import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { ThemeContext, Layout, HeroPic } from '@petspaw/components'

const RightSection = styled.section`
  width: 50%;
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

const App: FunctionComponent = (): JSX.Element => (
  <ThemeContext>
    <Layout>
      <RightSection>
        <StyledUselessBackground />
      </RightSection>
    </Layout>
  </ThemeContext>
)

export default App
