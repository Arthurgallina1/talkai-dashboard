import React, { useState, useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Loading from 'components/commom/Loading'
import { getOperatorsData } from 'services/api'
import Title from 'components/commom/Title'
import { Person } from '@material-ui/icons'
import OperatorCard from 'components/commom/OperatorCard'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2)
  },
  grid: {
    marginTop: 30,
    display: 'grid',
    gridGap: '30px',
    maxWidth: 400
    // [theme.breakpoints.down('md')]: {
    //   gridTemplateColumns: '1fr'
    // }
  },
  card: {
    padding: theme.spacing(2)
  }
}))

export default function Operadores() {
  const classes = useStyles()
  const [operatorsData, setOperatorsData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getOperatorsData()
        if (response.success) {
          setOperatorsData(response.data)
          setLoading(false)
        } else {
          setLoading(false)
        }
      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.container}
    >
      <Title color="black" icon={<Person color="primary" />}>
        Operadores
      </Title>
      {loading ? (
        <Loading />
      ) : (
        <Grid container className={classes.grid}>
          {operatorsData.length > 0 &&
            operatorsData?.map((operator) => (
              <OperatorCard key={operator.name} operator={operator} showLink />
            ))}
        </Grid>
      )}
    </Grid>
  )
}
