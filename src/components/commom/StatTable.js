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

export default function StatTable({ title, statData }) {
  const classes = useStyles()

  return (
    <Box mt={5}>
      <Box mb={2}>
        <Title color="black">
          <strong>{title}</strong>
        </Title>
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Estatística</StyledTableCell>
              <StyledTableCell align="center">Contagem</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {statData?.length &&
              statData.map((stat) => {
                return (
                  <TableRow key={stat.label}>
                    <StyledTableCell align="center">
                      {stat.label}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {stat.value}
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
