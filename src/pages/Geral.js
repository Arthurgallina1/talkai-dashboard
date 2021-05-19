import React from 'react'
import { Container, Grid, Paper } from '@material-ui/core'
import Tabela from 'components/VisaoGeral/Tabela'

export default function Geral() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Tabela />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
