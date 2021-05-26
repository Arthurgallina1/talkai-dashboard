import { Typography } from '@material-ui/core'
import React from 'react'

export default function Text({ children, variant = 'h5', color = 'primary' }) {
  return (
    <Typography color={color} variant={variant}>
      {children}
    </Typography>
  )
}
