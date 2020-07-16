import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { CssBaseline } from '@material-ui/core'
import Header from '../Header'
import Footer from '../Footer'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../../theme'

export default function Layout ({ children }) {
  return (
    <>
      <Helmet>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <link
          href='https://fonts.googleapis.com/css?family=Open+Sans&display=swap'
          rel='stylesheet'
        />
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Header />
        <CssBaseline />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}
