import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#123657',
      contrastText: '#fff'
    },
    secondary: {
      main: '#0098db',
      contrastText: '#fff'
    },
    text: {
      primary: '#555'
    }
  },
  typography: {
    fontFamily: ['Open Sans', '-apple-system'].join(','),
    h1: {
      fontSize: 40,
      fontWeight: 700
    },
    h2: {
      fontSize: 32,
      fontWeight: 700
    },
    h3: {
      fontSize: 24,
      fontWeight: 700
    },
    h4: {
      fontSize: 24,
      fontWeight: 700
    },
    h5: {
      fontSize: 24,
      fontWeight: 700
    },
    h6: {
      fontSize: 24,
      fontWeight: 700
    },
    subtitle1: {
      fontSize: 24,
      fontWeight: 700
    },
    subtitle2: {
      fontSize: 24,
      fontWeight: 700
    },
    body1: {
      fontSize: 16,
      fontWeight: 300
    },
    body2: {
      fontSize: 18,
      fontWeight: 700
    },
    button: {
      fontSize: 18,
      fontWeight: 700,
      textTransform: 'none'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 25
      }
    }
  }
})
