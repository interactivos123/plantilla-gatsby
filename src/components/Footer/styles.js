import { styled } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

export const MyContainerFooter = styled(Grid)({
  maxWidth: '1140px',
  margin: '0 auto'
})

export const MyColumn1 = styled(Grid)({
  '& .gatsby-image-wrapper': {
    maxWidth: '250px'
  }
})

export const MyContainerMenu = styled(Grid)({
})
