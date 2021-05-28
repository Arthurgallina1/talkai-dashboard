import React from 'react'
import { Box } from '@material-ui/core'
import Title from 'components/commom/Title'
import Table from 'components/commom/Table'
// import OperatorChatTable from './OperatorChatTable'

export default function OperatorChats({ operatorChats }) {
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
          'Conversa'
        ]}
        tableDataKeys={['id', 'clientPhone', 'label', 'createdAt']}
        tableData={operatorChats}
        hasActionItem
      />
      {/* <OperatorChatTable /> */}
    </Box>
  )
}
