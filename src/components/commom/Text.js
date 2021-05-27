import React from 'react'
import { Typography } from '@material-ui/core'

// const useStyles = makeStyles((theme) => ({
//   default: {
//     // color: theme.palette.getContrastText(deepOrange[500]),
//     color: theme.palette.primary.main
//   },
//   black: {
//     color: theme.palette.black.main
//   }
// }))

export default function Text({
  children,
  variant = 'h5',
  color = 'black',
  ...props
}) {
  // const classes = useStyles()

  return (
    <Typography color={color} variant={variant} {...props}>
      {children}
    </Typography>
  )
}
