import React from 'react'
import { ListaMenu } from '../ListaMenu'
import { MyDrawer, MyIconButton, MyContainerSocials } from './styles'
import CloseIcon from '@material-ui/icons/Close'
import { RedesSociales } from '../RedesSociales'
import { Grid } from '@material-ui/core'

export const MenuResponsive = (props) => {
  return (
    <MyDrawer
      anchor='left'
      variant='temporary'
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <Grid container justify='flex-end'>
        <MyIconButton color='primary' aria-label='menu' onClick={() => props.handleOpen()}>
          <CloseIcon />
        </MyIconButton>
      </Grid>

      <ListaMenu handleOpen={props.handleOpen} />

      <MyContainerSocials container alignItems='center'>
        <RedesSociales />
      </MyContainerSocials>
    </MyDrawer>
  )
}
