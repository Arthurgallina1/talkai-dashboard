import React from 'react'
import AuthLayout from 'pages/__layouts/auth'
import DefaultLayout from 'pages/__layouts/default'
import { Route, Redirect } from 'react-router-dom'
// import useAuth from 'hooks/useAuth'
import { useAuthStore } from 'store'

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { authenticated } = useAuthStore()

  if (!authenticated && isPrivate) {
    return <Redirect to="/sign-in" />
  }
  //Já está logado
  if (authenticated && !isPrivate) {
    return <Redirect to="/geral" />
  }

  const Layout = authenticated ? AuthLayout : DefaultLayout
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
