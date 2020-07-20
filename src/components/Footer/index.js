import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { MyContainerFooter } from './styles'
import Image from '../image'

const Footer = () => {
  return (
    <Box pt={4} pb={4}>
      <MyContainerFooter container direction='row'>
        <Grid item md={4}>
          <Image name='logo.png' />
        </Grid>
        <Grid item md={4}>
          <Image name='logo.png' />
        </Grid>
        <Grid item md={4}>
          <Image name='logo.png' />
        </Grid>
      </MyContainerFooter>
    </Box>
  )
}

export default Footer
