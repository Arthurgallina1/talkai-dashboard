import React from 'react'
import { Grid } from '@material-ui/core'

export default function MessageBox({ message }) {
  const isMessageOutput = message.chat_dir === 'o'
  const bgColor = isMessageOutput ? 'blue' : 'red'
  return (
    <Grid style={{ background: bgColor }}>
      <span>{message.chat_body}</span>
    </Grid>
  )
}
