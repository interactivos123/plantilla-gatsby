import { styled } from '@material-ui/core/styles'
import { Drawer, IconButton } from '@material-ui/core'

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
