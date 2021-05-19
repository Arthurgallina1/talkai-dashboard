import React from 'react'
/*eslint-disable*/
import Link from '@material-ui/core/Link'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Title from 'components/commom/Title'
// import Title from './Title'

// Generate Order Data
function createData(id, date, amount) {
  return { id, date, amount }
}

const rows = [
  createData(0, 'Total de mensagens', 200),
  createData(1, 'Total de mensagens', 300),
  createData(2, 'Total de atendentes', 400),
  createData(3, 'Total de usuários', 500),
  createData(4, 'Total de mensagens enviadas', 600)
]

function preventDefault(event) {
  event.preventDefault()
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2)
  }
}))

export default function Orders() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid className={classes.seeMore}>
        <Title>Dados consolidados</Title>
      </Grid>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div> */}
    </React.Fragment>
  )
}
