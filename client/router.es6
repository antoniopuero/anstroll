import React from 'react'
import { Router, Route, Link } from 'react-router'
import {Provider} from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import store from './store'

import mapPage from './entries/map-page/map-page'
import starterPoint from './entries/starter-point/starter-point'

//import './fluidable.less'

injectTapEventPlugin();

export default (
  <Provider store={store}>
    <Router>
      <Route path="/" component={starterPoint}/>
      <Route path="/map" component={mapPage}/>
    </Router>
  </Provider>
);