import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { NotFound } from '../pages/Notfound'
import { Login } from '../pages/Login'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ Login }/>
    <Route path="/*" component={ NotFound }/>
  </Switch>
)

export default Routes
