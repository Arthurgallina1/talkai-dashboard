import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { deepOrange } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: theme.palette.warning.dark
  }
}))

export default function LetterAvatars({ initialLetter }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Avatar className={classes.orange}>{initialLetter}</Avatar>
    </div>
  )
}
