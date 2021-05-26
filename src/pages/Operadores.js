import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import Avatar from 'components/commom/Avatar'
import Card from 'components/commom/Card'
import { getOperatorsData } from 'services/api'

export default function Operadores() {
  const [operatorsData, setOperatorsData] = useState([])
  const [loading, setLoading] = useState(false)

  const mock = {
    success: true,
    data: [
      {
        id: 1,
        name: 'João de Barro',
        createdAt: '2021-05-26T03:05:32.217Z',
        updatedAt: '2021-05-26T03:05:32.217Z'
      },
      {
        id: 2,
        name: 'Pietro Muniz',
        createdAt: '2021-05-26T03:05:32.217Z',
        updatedAt: '2021-05-26T03:05:32.217Z'
      },
      {
        id: 3,
        name: 'Mateus Taube',
        createdAt: '2021-05-26T03:05:32.217Z',
        updatedAt: '2021-05-26T03:05:32.217Z'
      }
    ]
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        setOperatorsData(mock.data)
        const response = await getOperatorsData()
        console.debug('data', response)
        setLoading(false)
      } catch (err) {
        console.log(loading)
        setLoading(false)
      }
    }
    console.debug('data', 12312)

    fetchData()
  }, [])

  useEffect(() => {
    console.debug('operatorsData', operatorsData)
  }, [operatorsData])

  return (
    <div>
      <h1>operadores</h1>
      <Grid container>
        {operatorsData.length > 0 &&
          operatorsData?.map((operator) => (
            <Card key={operator.name}>
              <Grid container direction="column" alignItems="center">
                <Avatar />
                {operator.name}
              </Grid>
              <Link to={`/operadores/${213}`}>
                <div>
                  <h4>{operator.id}</h4>
                </div>
              </Link>
            </Card>
          ))}
      </Grid>
    </div>
  )
}
