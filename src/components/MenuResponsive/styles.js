import { styled } from '@material-ui/core/styles'
import { Drawer, IconButton, Grid } from '@material-ui/core'

export const MyDrawer = styled(Drawer)({
  '& .MuiPaper-root': {
    width: '100%'
  }
})

export const MyIconButton = styled(IconButton)({
  '& svg': {
    fontSize: '30px',
    margin: 0
  }
})

export const MyContainerSocials = styled(Grid)({
  padding: '20px 0 0 30px',
  '& a': {
    marginRight: '10px'
  }
})
