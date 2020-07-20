import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export const CajaDeIcono = ({ title, description, Icono }) => {
  return (
    <Grid container>
      <Grid item xs={1}>{Icono}</Grid>
      <Grid item xs={11}>
        <Typography variant='body1'>{title}</Typography>
        <Typography variant='body1'>{description}</Typography>
      </Grid>
    </Grid>
  )
}
