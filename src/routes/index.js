import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

import Dashboard from 'pages/Dashboard'
// import SignUp from '../pages/SignUp';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        {/* <Route path="/register" exact component={SignUp} /> */}
        <Route path="/" component={() => <h1>404</h1>} />
      </Switch>
    </div>
  )
}
