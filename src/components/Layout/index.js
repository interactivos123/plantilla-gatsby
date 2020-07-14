import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../../theme'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
