import React from 'react'
import { useHistory } from 'react-router-dom'
import { Grid, Box, makeStyles } from '@material-ui/core'
import { ArrowBackIos } from '@material-ui/icons'
import Text from './Text'

const useStyles = makeStyles((theme) => ({
  container: {
    color: theme.palette.primary.main
  }
}))

export default function Title({ children, icon, hasGoBack = false }) {
  const classes = useStyles()
  const history = useHistory()
  return (
    <Grid
      container
      // justify="space-between"
      // alignItems="center"
      direction="column"
      className={classes.container}
    >
      {hasGoBack && (
        <Grid
          container
          alignItems="center"
          onClick={() => {
            history.goBack()
          }}
          style={{ cursor: 'pointer' }}
        >
          <ArrowBackIos />
          <Text variant="span">Voltar</Text>
        </Grid>
      )}
      <Grid container justify="center" alignItems="center">
        <Box mr={1}>{!!icon && icon}</Box>
        <Text>{children}</Text>
      </Grid>
    </Grid>
  )
}
