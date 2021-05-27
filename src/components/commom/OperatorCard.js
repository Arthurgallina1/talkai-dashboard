import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { ArrowForwardIos } from '@material-ui/icons'
import Avatar from 'components/commom/Avatar'
import Card from 'components/commom/Card'
import { formatDate } from 'utils/formatters'

export default function OperatorCard({ operator, showLink = false }) {
  return (
    <Card>
      <Grid container direction="column" alignItems="center">
        <Avatar />
        <p>{operator.name}</p>
        Desde de: {formatDate(operator.createdAt)}
      </Grid>
      {showLink && (
        <Grid
          container
          direction="column"
          alignItems="center"
          style={{ marginTop: 15 }}
        >
          <Link to={`/operadores/${operator.id}`}>
            <Grid container justify="center" alignItems="center">
              {/* <h4>{operator.id}</h4> */}
              <h5>Ver mais</h5>
              <ArrowForwardIos color="primary" fontSize="small" />
            </Grid>
          </Link>
        </Grid>
      )}
    </Card>
  )
}
