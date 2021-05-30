import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HomeComponent } from './Home'
import { AboutComponent } from './About'
import { NotFoundComponent } from './NotFound'

const AppRoutes = () => {
  return (
    <section>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route component={NotFoundComponent} />
      </Switch>
    </section>
  )
}

export default AppRoutes
