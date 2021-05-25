import React from 'react'
import { useParams } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import Card from 'components/commom/Card'
import Avatar from 'components/commom/Avatar'
// import useFetch from 'hooks/useFetch'

export default function Operador() {
  const { operatorId } = useParams()

  //   const [response, loading] = useFetch('/123')

  return (
    <div>
      <h1>Operador {operatorId} </h1>
      <Card>
        <Grid container direction="column" alignItems="center">
          <Avatar />
          <h4>Operador Felipe</h4>
        </Grid>
      </Card>
    </div>
  )
}
