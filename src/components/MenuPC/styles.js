import { styled } from '@material-ui/core/styles'
import { AppBar, Toolbar, Grid, IconButton } from '@material-ui/core'
import { theme } from '../../theme'

export const MyAppBar = styled(AppBar)({
  background: 'transparent',
  padding: '10px 0',
  height: '84px',
  transition: '.3s',
  justifyContent: 'center',
  '& .gatsby-image-wrapper': {
    width: '250px',
    transition: '.3s'
  },
  '&.sticky': {
    background: '#fff',
    height: '60px'
  },
  '&.sticky .gatsby-image-wrapper': {
    width: '200px'
  },
  [theme.breakpoints.down('md')]: {
    padding: '0 30px'
  }
})

export const MyToolbar = styled(Toolbar)({
  width: '100%',
  maxWidth: '1140px',
  margin: '0 auto',
  padding: 0,
  minHeight: '0px',
  '& svg': {
    marginLeft: '10px'
  }
})

export const MyContainerSocials = styled(Grid)({
  height: '29px',
  transition: '.3s',
  overflow: 'hidden',
  marginBottom: '5px',
  '&.sticky': {
    height: '0px',
    marginBottom: '0px'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
})

export const MyIconButton = styled(IconButton)({
  '& svg': {
    fontSize: '40px',
    margin: 0
  }
})
