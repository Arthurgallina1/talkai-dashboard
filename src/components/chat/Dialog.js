import React, { useState, forwardRef } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Grid,
  makeStyles
} from '@material-ui/core'
import { useEffect } from 'react'
import { getMessagesByChatId } from 'services/api'
import MessageBox from './MessageBox'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    background: theme.palette.primary.main,
    color: 'white'
  }
}))

export default function AlertDialogSlide({ id, button }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [messagesData, setMessagesData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMessagesByChatId(id)
        setMessagesData(response.data)
      } catch (err) {
        console.error(err)
      }
    }
    if (open) {
      fetchData()
    }
  }, [id, open])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Grid
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        style={{ cursor: 'pointer' }}
      >
        {button}
      </Grid>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          className={classes.titleContainer}
          id="alert-dialog-slide-title"
        >
          Conversa {id}
        </DialogTitle>
        <DialogContent style={{ background: '#EBE8E1', padding: 15 }}>
          {messagesData?.map((message) => {
            return <MessageBox message={message} key={message.chat_uid} />
          })}
          {/* <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
