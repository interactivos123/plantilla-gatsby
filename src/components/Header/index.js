import React from 'react'
import { Grid } from '@material-ui/core'
import Image from '../image'
import { MyAppBar, MyToolbar } from './styles'

const Header = () => {
  return (
    <>
      <MyAppBar position='fixed' color='primary'>
        <MyToolbar>
          <Grid container>

            <Grid item md={4}>
              <Image name='logo.png' />
            </Grid>

            <Grid item md={8} />

          </Grid>
        </MyToolbar>
      </MyAppBar>
    </>
  )
}

export default Header
