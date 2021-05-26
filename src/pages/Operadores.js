import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import Avatar from 'components/commom/Avatar'
import Loading from 'components/commom/Loading'
import Card from 'components/commom/Card'
import { getOperatorsData } from 'services/api'

export default function Operadores() {
  const [operatorsData, setOperatorsData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getOperatorsData()
        setOperatorsData(response.data)
        setLoading(false)
      } catch (err) {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>operadores</h1>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </div>
  )
}
