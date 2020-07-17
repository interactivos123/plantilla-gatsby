import { styled } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import { theme } from '../../theme'

export const MyAppBar = styled(AppBar)({
  background: 'transparent',
  padding: '10px 0',
  '& .gatsby-image-wrapper': {
    width: '250px'
  },
  '&.sticky': {
    background: '#000'
  }
})

export const MyToolbar = styled(Toolbar)({
  width: '1140px',
  margin: '0 auto',
  padding: 0,
  '& svg': {
    marginLeft: '10px'
  }
})

export const MyButtonMenu = styled(Button)({
  fontSize: '16px',
  marginLeft: '15px',
  padding: '0px',
  '& a': {
    padding: '2px 12px',
    borderRadius: '50px',
    transition: '.3s'
  },
  '&:hover a': {
    background: theme.palette.primary.main,
    color: '#fff',
    textDecoration: 'none'
  },
  '& a.active': {
    background: theme.palette.primary.main,
    color: '#fff',
    textDecoration: 'none'
  }
})
