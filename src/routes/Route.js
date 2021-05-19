import React from 'react'
import AuthLayout from 'pages/__layouts/auth'
/* eslint-disable */

import { Route, Redirect } from 'react-router-dom'

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  //    const {signed} = store.getState().auth;

  //     if(!signed && isPrivate){
  //         return <Redirect to="/" />;
  //     }
  //     //Já está logado
  //     if(signed && !isPrivate){
  //         return <Redirect to="/dashboard" />
  //     }

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
