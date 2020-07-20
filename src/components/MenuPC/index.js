import React, { useEffect } from 'react'
import { Grid, Hidden } from '@material-ui/core'
import Image from '../image'
import { Facebook, Instagram, Twitter, Pinterest, Menu } from '@material-ui/icons'
import { Link } from 'gatsby-theme-material-ui'
import { ListaMenu } from '../ListaMenu'
import {
  MyAppBar,
  MyToolbar,
  MyContainerSocials,
  MyIconButton
} from './styles'

export const MenuPC = (props) => {
  useEffect(() => {
    const navbar = document.getElementById('header')
    const socials = document.getElementById('container-socials')

    window.onscroll = function () {
      if (window.pageYOffset >= 1) {
        navbar.classList.add('sticky')
        socials.classList.add('sticky')
      } else {
        navbar.classList.remove('sticky')
        socials.classList.remove('sticky')
      }
    }
  }, [])

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

            <Hidden smDown>
              <MyContainerSocials container justify='flex-end' id='container-socials'>
                <a href='https://www.google.com.co/' target='_blanck'>
                  <Facebook color='primary' />
                </a>
                <a href='https://www.google.com.co/' target='_blanck'>
                  <Instagram color='primary' />
                </a>
                <a href='https://www.google.com.co/' target='_blanck'>
                  <Twitter color='primary' />
                </a>
                <a href='https://www.google.com.co/' target='_blanck'>
                  <Pinterest color='primary' />
                </a>
              </MyContainerSocials>
            </Hidden>

            <Hidden smDown>
              <Grid container justify='flex-end'>
                <ListaMenu />
              </Grid>
            </Hidden>

            <Hidden mdUp>
              <Grid container justify='flex-end'>
                <MyIconButton color='primary' aria-label='menu' onClick={() => props.handleOpen()}>
                  <Menu />
                </MyIconButton>
              </Grid>
            </Hidden>

          </Grid>

        </Grid>
      </MyToolbar>
    </MyAppBar>
  )
}
