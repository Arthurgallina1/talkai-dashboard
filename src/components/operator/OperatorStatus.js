import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import {
  Table,
  Box,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'
import Title from 'components/commom/Title'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 450,
    [theme.breakpoints.down('sm')]: {
      minWidth: 350
    }
  }
}))

export default function OperatorStatus({ operatorStatus = [] }) {
  const classes = useStyles()

  const formatStatName = (stat) => {
    switch (stat) {
      case 'o':
        return 'Mensangens Enviadas'
      case 'i':
        return 'Mensangens Recebidas'
    }
  }

  return (
    <Box mt={5}>
      <Title variant={'span'}>Stats</Title>
      {/* <Table
        tableHeadKeys={['Direção', 'Contagem']}
        tableDataKeys={['chat_dir', 'count']}
        tableData={operatorStatus}
      /> */}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right" key={123}>
                Stat
              </StyledTableCell>
              <StyledTableCell align="right" key={123}>
                Contagem
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {operatorStatus.length &&
              operatorStatus.map((stats) => {
                return (
                  <TableRow key={stats.chat_dir}>
                    <StyledTableCell align="right">
                      {formatStatName(stats.chat_dir)}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {stats.count}
                    </StyledTableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
