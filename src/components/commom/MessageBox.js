import React from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import { formatDate } from 'utils/formatters'

const ReceivedMessageContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 70% 30%;
  &::before {
    content: ''; //🦄
    position: absolute;
    bottom: 3px;
    left: -6px;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 8px solid white;
  }
`

const MessageBody = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => (props?.receiving ? 'white' : '#dcf8c7')};
  padding: 8px 5px;
  border-radius: 5px;

  small {
    margin-top: 3px;
    color: grey;
    font-size: 10px;
  }
`

const SentMessageContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 30% 70%;
  &::before {
    content: ''; //🦄
    position: absolute;
    bottom: 3px;
    right: -6px;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid #dcf8c7; //#dcf8c7
  }
`

const ReceivedMessage = ({ message }) => {
  return (
    <ReceivedMessageContainer>
      <MessageBody receiving>
        <span>{message.chat_body}</span>
        <small>{formatDate(message.createdAt)}</small>
      </MessageBody>
    </ReceivedMessageContainer>
  )
}

const SentMessage = ({ message }) => {
  return (
    <SentMessageContainer>
      <div></div>
      <MessageBody>
        <span>{message.chat_body}</span>
        <small>{formatDate(message.createdAt)}</small>
      </MessageBody>
    </SentMessageContainer>
  )
}

export default function MessageBox({ message }) {
  const isMessageOutput = message.chat_dir === 'o'
  return (
    <Grid style={{ marginBottom: 8 }}>
      {isMessageOutput ? (
        <SentMessage message={message} />
      ) : (
        <ReceivedMessage message={message} />
      )}

      {/* <span>{message.chat_body}</span> */}
    </Grid>
  )
}
