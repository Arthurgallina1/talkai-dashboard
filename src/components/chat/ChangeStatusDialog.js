import React, { useState, forwardRef } from 'react'
import {
  Button,
  Dialog,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Grid,
  makeStyles
} from '@material-ui/core'
import { updateChatById } from 'services/api'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    background: theme.palette.primary.main,
    color: 'white'
  },
  table: {
    minWidth: 450,
    [theme.breakpoints.down('sm')]: {
      minWidth: 350
    }
  },
  iniciado: {
    padding: 10,
    borderRadius: 18,
    color: 'white',
    background: theme.palette.success.main
  },
  pausado: {
    padding: 10,
    borderRadius: 18,
    color: 'white',
    background: theme.palette.error.main
  },
  finalizado: {
    padding: 10,
    borderRadius: 18,
    color: 'white',
    background: theme.palette.warning.main
  },
  venda: {
    padding: 10,
    borderRadius: 18,
    color: 'white',
    background: theme.palette.success.light
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '80%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

const Iniciado = () => {
  const classes = useStyles()
  return <div className={classes.iniciado}>Em andamento</div>
}

const Pausado = () => {
  const classes = useStyles()
  return <div className={classes.pausado}>Pausado</div>
}

const Finalizado = () => {
  const classes = useStyles()
  return <div className={classes.finalizado}>Finalizado</div>
}

const Venda = () => {
  const classes = useStyles()
  return <div className={classes.venda}>Venda</div>
}

const formatStatusLabel = (label) => {
  const labelObject = {
    iniciado: <Iniciado />,
    parado: <Pausado />,
    finalizado: <Finalizado />,
    venda: <Venda />
  }
  if (!labelObject[label]) return label

  return labelObject[label]
}

export default function ChangeStatusDialog({ id, status }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [statusAtual, setStatusAtual] = useState(status)

  const handleChange = async (event) => {
    const newStatus = event.target.value
    setStatusAtual(newStatus)

    const response = await updateChatById(id, newStatus)
    console.log(response.data)
  }

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
        {formatStatusLabel(statusAtual)}
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
          Atualizar status da conversa {id}
        </DialogTitle>
        <DialogContent style={{ background: '#EBE8E1', padding: 15 }}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">
              Status da Conversa
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={statusAtual}
              onChange={handleChange}
            >
              <MenuItem value={'parado'}>Pausado</MenuItem>
              <MenuItem value={'iniciado'}>Em andamento</MenuItem>
              <MenuItem value={'finalizado'}>Finalizado</MenuItem>
              <MenuItem value={'venda'}>Venda Realizada</MenuItem>
            </Select>
          </FormControl>
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
