import React from 'react'
import { MenuResponsive } from '../MenuResponsive'
import { MenuPC } from '../MenuPC'
import { Hidden } from '@material-ui/core'

const Header = () => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(!open)
    console.log(open)
  }

  return (
    <>
      <MenuPC handleOpen={handleOpen} />

      <Hidden mdUp>
        <MenuResponsive
          open={open}
          onClose={handleOpen}
          handleOpen={handleOpen}
        />
      </Hidden>
    </>
  )
}

export default Header
