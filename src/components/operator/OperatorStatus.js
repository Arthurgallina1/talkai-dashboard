import React from 'react'

export default function OperatorStatus({ operatorStatus }) {
  return (
    <div>
      status:
      {operatorStatus.length &&
        operatorStatus?.map((status) => (
          <span key={status.char_dir}>{status.chat_dir} / </span>
        ))}
    </div>
  )
}
