import React from 'react'
import { useHistory } from 'react-router-dom'
import { Grid, Box, makeStyles } from '@material-ui/core'
import { ArrowBackIos } from '@material-ui/icons'
import Text from './Text'

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.primary.main
  }
}))

export default function Title({ children, color, icon, hasGoBack = false }) {
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
          <ArrowBackIos className={classes.icon} />
          <Text variant="span" color="primary">
            <strong>Voltar</strong>
          </Text>
        </Grid>
      )}
      <Grid container justify="center" alignItems="center">
        <Box mr={1}>{!!icon && icon}</Box>
        <Text color={color}>{children}</Text>
      </Grid>
    </Grid>
  )
}
