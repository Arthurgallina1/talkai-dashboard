import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid } from '@material-ui/core'
import { ArrowForwardIos } from '@material-ui/icons'
import Avatar from 'components/commom/Avatar'
import Card from 'components/commom/Card'
import { formatDate } from 'utils/formatters'
import Text from './Text'

export default function OperatorCard({ operator, showLink = false }) {
  return (
    <Card>
      <Grid container direction="column" alignItems="center">
        <Avatar />
        <Text variant="h6" classSelected="black" style={{ marginBottom: 10 }}>
          {operator.name}
        </Text>
        <Text variant="p">
          <strong>Desde de</strong> {formatDate(operator.createdAt)}
        </Text>
        <Text variant="p">
          <strong>Operação</strong> TBD
        </Text>
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
              <Button variant="contained" color="primary" onClick={() => {}}>
                <Text variant="p" color="black" style={{ marginRight: 5 }}>
                  <strong>Ver Mais</strong>
                </Text>
                <ArrowForwardIos color="white" fontSize="small" />
              </Button>
            </Grid>
          </Link>
        </Grid>
      )}
    </Card>
  )
}
