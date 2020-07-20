import { styled } from '@material-ui/styles'

export const Container = styled('div')({
  background: 'transparent',
  width: '100%',
  height: '100vh',
  position: 'relative',
  '& .gatsby-image-wrapper': {
    width: '100%',
    height: '100%'
  }
})
