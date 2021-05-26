import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { ArrowForwardIos } from '@material-ui/icons'
import Avatar from 'components/commom/Avatar'
import Card from 'components/commom/Card'

export default function OperatorCard({ operator, showLink = false }) {
  return (
    <Card>
      <Grid container direction="column" alignItems="center">
        <Avatar />
        {operator.name}
      </Grid>
      {showLink && (
        <Grid
          container
          direction="column"
          alignItems="center"
          style={{ marginTop: 15 }}
        >
          <Link to={`/operadores/${213}`}>
            <Grid container justify="center" alignItems="center">
              <h4>{operator.id}</h4>
              <ArrowForwardIos color="primary" fontSize="small" />
            </Grid>
          </Link>
        </Grid>
      )}
    </Card>
  )
}
