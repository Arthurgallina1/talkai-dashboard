import React, { useState, useEffect } from 'react'
import { Container, Grid } from '@material-ui/core'
// import Tabela from 'components/VisaoGeral/Tabela'
import Loading from 'components/commom/Loading'
import { getVisaoGeralData } from 'services/api'
import StatTable from 'components/commom/StatTable'

export default function Geral() {
  const [generalTableData, setGeneralTableData] = useState({ stats: [] })
  const [loading, setLoading] = useState(false)
  // const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getVisaoGeralData()
        console.debug('data', response.data)
        setGeneralTableData(response.data)
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
          <>
            <Grid item xs={12} lg={12}>
              <StatTable
                statData={generalTableData.stats}
                title="Visão Geral"
              />
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  )
}
