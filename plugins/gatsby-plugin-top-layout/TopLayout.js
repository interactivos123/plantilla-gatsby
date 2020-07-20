import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../../src/theme'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export default function TopLayout ({ children }) {
  return (
    <>
      <Helmet>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <link
          href='https://fonts.googleapis.com/css?family=Open+Sans&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node
}
