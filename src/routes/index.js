import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

import Dashboard from 'pages/Dashboard'
import SignIn from 'pages/SignIn'
import Geral from 'pages/Geral'
import Operador from 'pages/Operador'
import Operadores from 'pages/Operadores'
// import SignUp from '../pages/SignUp';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/" isPrivate exact component={Dashboard} />
        <Route path="/geral" isPrivate component={Geral} />
        {/* <Route path="/register" exact component={SignUp} /> */}
        <Route path="/operadores" isPrivate component={Operadores} />
        <Route path="/operadores/:operatorId" component={Operador} />

        <Route path="/" component={() => <h1>404</h1>} />
      </Switch>
    </div>
  )
}
