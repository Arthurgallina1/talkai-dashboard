import React from 'react'
import { Box } from '@material-ui/core'
import Title from 'components/commom/Title'
import Table from 'components/commom/Table'

export default function OperatorStatus({ operatorChats }) {
  return (
    <Box mt={5}>
      <Title variant={'span'}>Conversas</Title>
      <Table
        tableHeadKeys={[
          'ID',
          'Telefone Cliente',
          'Status',
          'Criado em',
          'Conversa'
        ]}
        tableDataKeys={['id', 'clientPhone', 'label', 'createdAt']}
        tableData={operatorChats}
        hasActionItem
      />
    </Box>
  )
}
