import React from 'react'
import { Grid, Box, makeStyles } from '@material-ui/core'
import Text from './Text'
import { ArrowBackIos } from '@material-ui/icons'

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
      // justify="space-between"
      // alignItems="center"
      direction="column"
      className={classes.container}
    >
      <Grid container alignItems="center">
        <ArrowBackIos />
        <Text variant="span">Go back</Text>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Box mr={1}>{!!icon && icon}</Box>
        <Text>{children}</Text>
      </Grid>
    </Grid>
  )
}
