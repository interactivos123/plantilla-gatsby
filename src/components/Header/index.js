import React from 'react'
import { Grid } from '@material-ui/core'
import Image from '../image'
import { MyAppBar, MyToolbar } from './styles'
import { Facebook, Instagram, Twitter, Pinterest } from '@material-ui/icons'
import { Link, Button } from 'gatsby-theme-material-ui'

const Header = () => {
  return (
    <>
      <MyAppBar position='fixed' color='primary'>
        <MyToolbar>
          <Grid container alignItems='center'>

            <Grid item md={4}>
              <Image name='logo.png' />
            </Grid>

            <Grid container md={8} justify='flex-end'>

              <Grid container md={12} justify='flex-end'>
                Redes sociales
                <Facebook color='primary' />
                <Instagram color='primary' />
                <Twitter color='primary' />
                <Pinterest color='primary' />
              </Grid>

              <Grid container md={12} justify='flex-end'>
                <Button>
                  <Link to='/'>Inicio</Link>
                </Button>
                <Button>
                  <Link to='/sobreNosotros'>Nosotros</Link>
                </Button>
                <Button>
                  <Link to='/sobreNosotros'>Nosotros</Link>
                </Button>
                <Button>
                  <Link to='/blog'>Blog</Link>
                </Button>
                <Button>
                  <Link to='/contacto'>Contacto</Link>
                </Button>
              </Grid>

            </Grid>

          </Grid>
        </MyToolbar>
      </MyAppBar>
    </>
  )
}

export default Header
