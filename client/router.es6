import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import {Provider} from 'react-redux'
import store from './store'
import {receiveTexts} from 'services/cms'
import {updateTexts} from './action-creators'

import mapPage from './entries/map-page/map-page'
import starterPoint from './entries/starter-point/starter-point'


import './fluidable.less'

store.dispatch(updateTexts(receiveTexts));

render((
  <Provider store={store}>
    <Router>
      <Route path="/" component={starterPoint}/>
      <Route path="/map" component={mapPage}/>
    </Router>
  </Provider>
), document.getElementById('main'));