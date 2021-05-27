import React, { useState, forwardRef } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide
} from '@material-ui/core'
import { useEffect } from 'react'
import { getMessagesByChatId } from 'services/api'
import MessageBox from './MessageBox'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function AlertDialogSlide({ id, button }) {
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
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {button}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Conversa {id}</DialogTitle>
        <DialogContent>
          {messagesData?.map((message) => {
            return <MessageBox message={message} key={message.chat_uid} />
          })}
          {/* <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
