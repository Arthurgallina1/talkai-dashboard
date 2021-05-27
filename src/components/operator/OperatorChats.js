import React from 'react'
import { Box } from '@material-ui/core'
import Title from 'components/commom/Title'
import Table from 'components/commom/Table'

export default function OperatorStatus({ operatorChats }) {
  return (
    <Box mt={5}>
      <Box mb={2}>
        <Title variant={'span'}>Conversas</Title>
      </Box>
      <Table
        tableHeadKeys={[
          'ID',
          'Telefone Cliente',
          'Status',
          'Criado em',
          'Conversa',
          'Download'
        ]}
        tableDataKeys={['id', 'clientPhone', 'label', 'createdAt']}
        tableData={operatorChats}
        hasActionItem
      />
    </Box>
  )
}
