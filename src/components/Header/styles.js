import { styled } from '@material-ui/core/styles'
import { AppBar, Toolbar } from '@material-ui/core'

export const MyAppBar = styled(AppBar)({
  background: 'transparent',
  '& .gatsby-image-wrapper': {
    width: '250px'
  }
})

export const MyToolbar = styled(Toolbar)({
  width: '1140px',
  margin: '0 auto',
  padding: 0,
  '@media (max-width: 1140px)': {
    width: 'auto'
  }
})
