import React, { useEffect } from 'react'
import { Grid, Hidden } from '@material-ui/core'
import Image from '../image'
import { Menu } from '@material-ui/icons'
import { Link } from 'gatsby'
import { ListaMenu } from '../ListaMenu'
import { RedesSociales } from '../RedesSociales'
import {
  MyAppBar,
  MyToolbar,
  MyContainerSocials,
  MyIconButton,
  MyContainerMenu,
  MyContainerIconMenuResponsive
} from './styles'

export const MenuPC = (props) => {
  useEffect(() => {
    const navbar = document.getElementById('header')
    const socials = document.querySelector('#container-socials')
    window.onscroll = function () {
      if (window.pageYOffset >= 1) {
        navbar.classList.add('sticky')
        socials.classList.add('sticky')
        console.log('social')
      } else {
        navbar.classList.remove('sticky')
        socials.classList.remove('sticky')
      }
    }
  })

  return (
    <MyAppBar position='fixed' color='primary' id='header'>
      <MyToolbar>
        <Grid container alignItems='center'>

          <Grid item xs={4}>
            <Link to='/'>
              <Image name='logo.png' />
            </Link>
          </Grid>

          <Grid item xs={8}>

            <MyContainerSocials container justify='flex-end' id='container-socials'>
              <RedesSociales />
            </MyContainerSocials>

            <MyContainerMenu container justify='flex-end'>
              <ListaMenu />
            </MyContainerMenu>

            <MyContainerIconMenuResponsive container justify='flex-end'>
              <MyIconButton color='primary' aria-label='menu' onClick={() => props.handleOpen()}>
                <Menu />
              </MyIconButton>
            </MyContainerIconMenuResponsive>

          </Grid>

        </Grid>
      </MyToolbar>
    </MyAppBar>
  )
}
