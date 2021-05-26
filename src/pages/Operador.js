import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Visibility } from '@material-ui/icons'
import { Box, Grid } from '@material-ui/core'
import Loading from 'components/commom/Loading'
import Title from 'components/commom/Title'
import OperatorCard from 'components/commom/OperatorCard'
import Table from 'components/commom/Table'
// import useFetch from 'hooks/useFetch'

export default function Operador() {
  const { operatorId } = useParams()
  const [operatorData, setOperatorData] = useState([])
  const [loading, setLoading] = useState(false)
  const mock = {
    success: true,
    data: [
      {
        id: 9,
        operatorId: 1,
        clientPhone: '12345',
        label: 'iniciado',
        createdAt: '2021-05-26T01:09:46.557Z',
        updatedAt: '2021-05-26T01:09:46.557Z'
      },
      {
        id: 10,
        operatorId: 1,
        clientPhone: '12345',
        label: 'iniciado',
        createdAt: '2021-05-26T01:10:45.639Z',
        updatedAt: '2021-05-26T01:10:45.639Z'
      }
    ]
  }
  //   const [response, loading] = useFetch('/123')
  useEffect(() => {
    const fetchData = async () => {
      try {
        setOperatorData(mock.data)
        // const response = await getOperatorsData()
        setLoading(false)
        console.log(operatorData, mock.data)
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
            <Box mt={5}>
              <Title variant={'span'}>Conversas</Title>
              <Table />
            </Box>
          </Grid>
        </Box>
      )}
    </div>
  )
}
