import React from 'react'
import { Box } from '@material-ui/core'
import Title from 'components/commom/Title'
import Table from 'components/commom/Table'

export default function OperatorStatus({ operatorChats }) {
  console.log('operatorChats', operatorChats)

  //   const formatOperatorsChatToTableData = () => {

  //   }
  return (
    <Box mt={5}>
      <Title variant={'span'}>Conversas</Title>
      <Table
        tableHeadKeys={[
          'ID',
          'Operator',
          'Telefone Cliente',
          'Status',
          'Criado em',
          'Conversa'
        ]}
        tableDataKeys={[
          'id',
          'operatorId',
          'clientPhone',
          'label',
          'createdAt'
        ]}
        tableData={operatorChats}
      />
    </Box>
  )
}
