import React from 'react'
import { Link } from 'gatsby'
import { Button } from '@material-ui/core'
import { LinkButtonContainer } from './styles'

export const LinkButton = ({ variant = 'text', color = 'default', to = '/', children, endIcon, disabled = false, startIcon, fullWidth = false }) => {
  return (
    <LinkButtonContainer>
      <Link to={!disabled ? to : ''}>
        <Button variant={variant} color={color} endIcon={endIcon} disabled={disabled} startIcon={startIcon} fullWidth={fullWidth}>
          {children}
        </Button>
      </Link>
    </LinkButtonContainer>
  )
}
