import React from 'react'
import NavBar from 'components/NavBar'

// import { Wrapper, Content } from './styles'
// import Header from '../../../Components/Header'

export default function AuthLayout({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      {/* <Header /> */}
      <NavBar />
      {children}
      {/* <Content>{children}</Content> */}
    </div>
  )
}
