import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import { PATH_PREFIX } from '~constants/routes'
import { routes } from '~routes'

import { store, history } from '~store/createStore'

export default class App extends Component {
  render() {
    return (
      <ConnectedRouter store={store} history={history}>
        <Route match={PATH_PREFIX}>
          <Switch>
            {routes.map(routeProps => (
              <Route key={routeProps.path} {...routeProps} />
            ))}
          </Switch>
        </Route>
      </ConnectedRouter>
    )
  }
}
