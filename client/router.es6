import React from 'react'
import { Router, Route, Link } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import {Provider} from 'react-redux'
import store from './store'

import mapPage from './entries/map-page/map-page'
import starterPoint from './entries/starter-point/starter-point'

export default (
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Route path="/" component={starterPoint}/>
      <Route path="/map" component={mapPage}/>
    </Router>
  </Provider>
);