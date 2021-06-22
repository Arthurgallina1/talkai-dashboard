import React from 'react'
import AuthLayout from 'pages/__layouts/auth'
import { Route, Redirect } from 'react-router-dom'
import useAuth from 'hooks/useAuth'

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const [isAuthed] = useAuth()

  if (!isAuthed && isPrivate) {
    return <Redirect to="/" />
  }
  //Já está logado
  if (isAuthed && !isPrivate) {
    return <Redirect to="/geral" />
  }

  const Layout = AuthLayout // signed ? DefaultLayout : AuthLayout
  //Apenas retorna o componente
  return (
    // Render: função que recebe todas propriedades da tela.
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}
