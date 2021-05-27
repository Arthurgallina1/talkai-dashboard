import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Visibility } from '@material-ui/icons'
import { Box, Grid } from '@material-ui/core'
import OperatorStatus from 'components/operator/OperatorStatus'
import Loading from 'components/commom/Loading'
import Title from 'components/commom/Title'
import OperatorCard from 'components/commom/OperatorCard'
import OperatorChats from 'components/operator/OperatorChats'
import { getOperatorOverview } from 'services/api'
// import useFetch from 'hooks/useFetch'

export default function Operador() {
  const { operatorId } = useParams()
  const [operatorData, setOperatorData] = useState({ status: [], chats: [] })
  const [loading, setLoading] = useState(false)
  //   const [response, loading] = useFetch('/123')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getOperatorOverview(operatorId)
        setLoading(false)
        setOperatorData(response.data)
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
          <Title icon={<Visibility />} hasGoBack>
            Operador {operatorId}
          </Title>
          <Grid
            container
            direction="column"
            alignItems="center"
            style={{ marginTop: 15 }}
          >
            <OperatorCard operator={operatorId} />
            <OperatorStatus operatorStatus={operatorData?.status} />
            <OperatorChats operatorChats={operatorData?.chats} />
          </Grid>
        </Box>
      )}
    </div>
  )
}
