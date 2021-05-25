import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

import Dashboard from 'pages/Dashboard'
import Geral from 'pages/Geral'
import Operador from 'pages/Operador'
import Operadores from 'pages/Operadores'
// import SignUp from '../pages/SignUp';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/geral" exact component={Geral} />
        {/* <Route path="/register" exact component={SignUp} /> */}
        <Route path="/operadores" exact component={Operadores} />
        <Route path="/operadores/:operatorId" component={Operador} />
        <Route path="/" component={() => <h1>404</h1>} />
      </Switch>
    </div>
  )
}
