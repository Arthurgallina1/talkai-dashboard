import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { Person } from '@material-ui/icons'
import { Box, Grid } from '@material-ui/core'
import StatTable from 'components/commom/StatTable'
import Loading from 'components/commom/Loading'
import Title from 'components/commom/Title'
import OperatorCard from 'components/commom/OperatorCard'
import OperatorChats from 'components/operator/OperatorChatsTable'
import { getOperatorOverview } from 'services/api'
// import useFetch from 'hooks/useFetch'

export default function Operador() {
  const { operatorId } = useParams()
  const [operatorData, setOperatorData] = useState({ stats: [], chats: [] })
  const [loading, setLoading] = useState(true)
  //   const [response, loading] = useFetch('/123')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getOperatorOverview(operatorId)
        console.log(response)
        setOperatorData(response.data)
        setLoading(false)
      } catch (err) {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Box p={3}>
          <Title hasGoBack>{/* Operador {operatorId} */}</Title>
          <Grid
            container
            direction="column"
            alignItems="center"
            style={{ marginTop: 15 }}
          >
            <OperatorCard operator={operatorData} />
            <StatTable
              title="Visão por operador"
              statData={operatorData.stats}
            />
            <OperatorChats operatorChats={operatorData?.chats} />
          </Grid>
        </Box>
      )}
    </div>
  )
}
