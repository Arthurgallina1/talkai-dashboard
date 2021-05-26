import React from 'react'
import { Grid, Box, makeStyles } from '@material-ui/core'
import Text from './Text'

const useStyles = makeStyles((theme) => ({
  container: {
    color: theme.palette.primary.main
  }
}))

export default function Title({ children, icon = '' }) {
  const classes = useStyles()
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Box mr={1}>{!!icon && icon}</Box>
      <Text>{children}</Text>
    </Grid>
  )
}
