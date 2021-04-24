import React, { FunctionComponent, ReactNode } from 'react'
import { ThemeProvider, createGlobalStyle, css } from 'styled-components'

import colors from '../constants/colors'

const fonts = css`
  @font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v6/92zPtBhPNqw79Ij1E865zBUv7myRJTVBNI4un_HKOEo.woff)
      format('woff');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
`

const bodyStyles = css`
  color: ${({ theme: { text } }) => text};
  font-family: 'Nunito Sans';
  background-color: ${({ theme: { background } }) => background};
  margin: 0;
  -webkit-text-size-adjust: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.15;
`

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    ${bodyStyles}
  }
  h1 {
    margin: 0;
    font-weight: 700;
    font-size: 32px;
  }
  button {
    border: 0;
    background: none;
    cursor: pointer;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  ul li {
    margin: 0;
    padding: 0;
  }
  a {
    cursor: pointer
  }
`

interface ThemeContextProps {
  children: ReactNode
}

const ThemeContext: FunctionComponent<ThemeContextProps> = ({ children }) => (
  <ThemeProvider theme={{ ...colors }}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default ThemeContext
