import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Image from '../image'
import { MyAppBar, MyToolbar, MyButtonMenu } from './styles'
import { Facebook, Instagram, Twitter, Pinterest } from '@material-ui/icons'
import { Link } from 'gatsby-theme-material-ui'

const Header = () => {
  useEffect(() => {
    const navbar = document.getElementById('header')
    window.onscroll = function () {
      if (window.pageYOffset >= 1) {
        navbar.classList.add('sticky')
      } else {
        navbar.classList.remove('sticky')
      }
    }
  }, [])

  return (
    <>
      <MyAppBar position='fixed' color='primary' id='header'>
        <MyToolbar>
          <Grid container alignItems='center'>

            <Grid item md={4}>
              <Image name='logo.png' />
            </Grid>

            <Grid item md={8}>

              <Grid container justify='flex-end'>
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
              </Grid>

              <Grid container justify='flex-end'>
                <MyButtonMenu>
                  <Link to='/' activeClassName='active'>Inicio</Link>
                </MyButtonMenu>
                <MyButtonMenu>
                  <Link to='/sobreNosotros' activeClassName='active'>Nosotros</Link>
                </MyButtonMenu>
                <MyButtonMenu>
                  <Link to='/blog' activeClassName='active'>Blog</Link>
                </MyButtonMenu>
                <MyButtonMenu>
                  <Link to='/contacto' activeClassName='active'>Contacto</Link>
                </MyButtonMenu>
              </Grid>

            </Grid>

          </Grid>
        </MyToolbar>
      </MyAppBar>
    </>
  )
}

export default Header
