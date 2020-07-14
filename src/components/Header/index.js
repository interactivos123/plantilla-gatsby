import React from 'react'
import { Toolbar, Button } from '@material-ui/core'
import Image from '../image'
import { MyAppBar } from './styles'

const Header = () => {
  return (
    <>
      <MyAppBar position='fixed' color='primary'>
        <Toolbar>
          <Image name='logo.png' />
          <Button variant='contained' color='primary'>Test</Button>
        </Toolbar>
      </MyAppBar>
    </>
  )
}

export default Header
