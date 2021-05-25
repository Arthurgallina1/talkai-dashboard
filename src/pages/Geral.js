import React, { useState, useEffect } from 'react'
import { Container, Grid, Paper } from '@material-ui/core'
import Tabela from 'components/VisaoGeral/Tabela'
import Loading from 'components/commom/Loading'
import { getVisaoGeralData } from 'services/api'

export default function Geral() {
  const [generalTableData, setGeneralTableData] = useState({})
  const [loading, setLoading] = useState(false)
  // const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getVisaoGeralData()
        console.debug('data', response)
        setGeneralTableData(response)
        setLoading(false)
      } catch (err) {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {loading ? (
          <Loading />
        ) : (
          <Grid item xs={12}>
            <Paper>
              <Tabela data={generalTableData} />
            </Paper>
          </Grid>
        )}
      </Grid>
    </Container>
  )
}
