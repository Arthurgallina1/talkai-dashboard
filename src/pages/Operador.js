import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import Card from 'components/commom/Card'
import Avatar from 'components/commom/Avatar'
import Loading from 'components/commom/Loading'
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
      } catch (err) {
        console.log(loading)
        setLoading(false)
      }
    }
    console.debug('data', 12312)

    fetchData()
  }, [])

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1>Operador {operatorId} </h1>
          <Card>
            <Grid container direction="column" alignItems="center">
              <Avatar />
              {operatorData.name}
            </Grid>
          </Card>
        </>
      )}
    </div>
  )
}
