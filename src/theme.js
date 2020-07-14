import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#04C45C',
      contrastText: '#fff'
    },
    secondary: {
      main: '#001B38',
      contrastText: '#fff'
    }
  },
  typography: {
    fontFamily: ['Roboto', '-apple-system'].join(','),
    h1: {
      fontSize: 12,
      fontWeight: 700
    },
    h2: {
      fontSize: 32,
      fontWeight: 700
    },
    h3: {
      fontSize: 32,
      fontWeight: 700
    },
    h4: {
      fontSize: 32,
      fontWeight: 700
    },
    h5: {
      fontSize: 32,
      fontWeight: 700
    },
    h6: {
      fontSize: 32,
      fontWeight: 700
    },
    subtitle1: {
      fontSize: 28,
      fontWeight: 700
    },
    subtitle2: {
      fontSize: 32,
      fontWeight: 700
    },
    body1: {
      fontSize: 16,
      fontWeight: 300
    },
    body2: {
      fontSize: 32,
      fontWeight: 700
    },
    button: {
      fontSize: 16,
      fontWeight: 700,
      textTransform: 'none'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 20
      }
    }
  }
})
