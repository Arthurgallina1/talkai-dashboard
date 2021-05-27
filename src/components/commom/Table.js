import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { ArrowForwardIos } from '@material-ui/icons'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'
import Dialog from './Dialog'

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

// function createData(id, clientPhone, label, createdAt) {
//   return { id, clientPhone, label, createdAt }
// }

// const Iniciado = () => <div style={{ background: 'green' }}>Iniciado</div>

// const getLabel = (label) => {
//   const labelObject = {
//     iniciado: <Iniciado />,
//     pausado: 'Pausado'
//   }
//   return labelObject[label]
// }

// const rows = [
//   createData(2, '(49)12345-2322', getLabel('iniciado'), '2021-05-26'),
//   createData(10, '(49)12345-2322', 'Iniciado', '2021-05-26'),
//   createData(11, '(49)12345-2322', 'Iniciado', '2021-05-26'),
//   createData(12, '(49)12345-2322', 'Iniciado', '2021-05-26'),
//   createData(13, '(49)12345-2322', 'pausado', '2021-05-26')
// ]

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 450,
    [theme.breakpoints.down('sm')]: {
      minWidth: 350
    }
  }
}))

export default function CustomizedTables({
  tableDataKeys,
  tableHeadKeys,
  tableData,
  hasActionItem = false
}) {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {tableHeadKeys.length > 0 &&
              tableHeadKeys.map((tableRow) => {
                return (
                  <StyledTableCell align="right" key={tableRow}>
                    {tableRow}
                  </StyledTableCell>
                )
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((tableRow) => {
            return (
              <StyledTableRow key={tableRow.id}>
                {tableDataKeys.map((key) => (
                  <StyledTableCell align="right" key={tableRow[key]}>
                    {tableRow[key]}
                  </StyledTableCell>
                ))}
                {hasActionItem && (
                  <StyledTableCell align="center">
                    <Dialog
                      id={tableRow.id}
                      button={<ArrowForwardIos color="primary" />}
                    />
                  </StyledTableCell>
                )}
              </StyledTableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
