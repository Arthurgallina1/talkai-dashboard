import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { ArrowForwardIos } from '@material-ui/icons'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow)

function createData(id, clientPhone, label, createdAt) {
  return { id, clientPhone, label, createdAt }
}

const rows = [
  createData(9, '(49)12345-2322', 'Iniciado', '2021-05-26'),
  createData(10, '(49)12345-2322', 'Iniciado', '2021-05-26'),
  createData(11, '(49)12345-2322', 'Iniciado', '2021-05-26'),
  createData(12, '(49)12345-2322', 'Iniciado', '2021-05-26'),
  createData(13, '(49)12345-2322', 'Iniciado', '2021-05-26')
]

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 450,
    [theme.breakpoints.down('sm')]: {
      minWidth: 350
    }
  }
}))

export default function CustomizedTables() {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Id</StyledTableCell>
            <StyledTableCell align="right">Número Telefone</StyledTableCell>
            <StyledTableCell align="right">Label</StyledTableCell>
            <StyledTableCell align="right">Criado em</StyledTableCell>
            <StyledTableCell align="right">Ver conversa</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.clientPhone}</StyledTableCell>
              <StyledTableCell align="right">{row.label}</StyledTableCell>
              <StyledTableCell align="right">{row.createdAt}</StyledTableCell>
              <StyledTableCell align="center">
                <ArrowForwardIos color="primary" />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
