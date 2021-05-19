import React from 'react'
import styled from 'styled-components'
import NavBar from 'components/NavBar'

export const Content = styled.div`
  margin-top: 65px;
  /* margin: 65px auto 0 auto; */
  min-height: calc(100vh - 65px);
  width: calc(100vw - 240px);
  /* border: 1px solid black; */
`

export const Wrapper = styled.div`
  display: flex;
`

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <NavBar />
      <Content>{children}</Content>
    </Wrapper>
  )
}
