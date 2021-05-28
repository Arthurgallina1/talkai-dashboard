import * as React from 'react'
import styled from 'styled-components'
import { Button, makeStyles } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid'
import { formatDate } from 'utils/formatters'
import ChatIcon from '@material-ui/icons/Chat'

import Dialog from 'components/commom/Dialog'
/*eslint-disable*/

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 450,
    [theme.breakpoints.down('sm')]: {
      minWidth: 350
    }
  },
  iniciado: {
    padding: 10,
    borderRadius: 18,
    color: 'white',
    background: theme.palette.success.main
  },
  pausado: {
    padding: 10,
    borderRadius: 18,
    color: 'white',
    background: theme.palette.error.main
  },
  header: {
    background: theme.palette.primary.main,
    color: 'white',
    width: '100%'
  },
  cell: {
    // background: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const Wrapper = styled.div`
  height: 400px;
  width: 100%;
  .MuiDataGrid-columnHeader {
    background: 'gray' !important;
    color: 'white';
  }
`

const Iniciado = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      size="small"
      style={{ marginLeft: 16 }}
    >
      Iniciado
    </Button>
  )
}
const Pausado = () => {
  return (
    <Button
      variant="contained"
      color="secondary"
      size="small"
      style={{ marginLeft: 16 }}
    >
      Pausado
    </Button>
  )
}

const formatStatusLabel = (label) => {
  const labelObject = {
    iniciado: <Iniciado />,
    parado: <Pausado />
  }
  if (!labelObject[label]) return label

  return labelObject[label]
}

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    headerAlign: 'center'
  },
  {
    field: 'clientPhone',
    headerName: 'Telefone',
    width: 150,
    headerAlign: 'center'
  },
  {
    field: 'label',
    headerName: 'Status',
    width: 150,
    renderCell: (params) => formatStatusLabel(params.value)
  },
  {
    field: 'createdAt',
    headerName: 'Criado em',
    width: 150,
    valueFormatter: (params) => formatDate(params.value)
  },
  {
    field: 'chat',
    headerName: 'Chat',
    width: 120,
    renderCell: (params) => (
      <strong>
        <Dialog id={params.value} button={<ChatIcon color="primary" />} />
      </strong>
    )
  }

  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue(params.id, 'firstName') || ''} ${
  //       params.getValue(params.id, 'lastName') || ''
  //     }`
  // }
]

// { id, clientPhone, label, created, conversa }
const data = [
  {
    id: 1,
    operatorId: 1,
    clientPhone: '1234656',
    label: 'iniciado',
    createdAt: '2021-05-26T03:05:32.219Z',
    chat: 1
  },
  {
    id: 3,
    operatorId: 1,
    clientPhone: '147852369',
    label: 'parado',
    createdAt: '2021-05-26T03:05:32.219Z',
    chat: 3
  }
]

export default function DataGridDemo() {
  const classes = useStyles()
  return (
    <Wrapper>
      <DataGrid
        classes={{
          columnHeader: classes.header,
          cell: classes.cell
        }}
        rows={data}
        columns={columns}
        pageSize={4}
        disableColumnMenu
        disableColumnResize
        disableSelectionOnClick
        hideFooterPagination
        autoPageSize
      />
    </Wrapper>
  )
}
