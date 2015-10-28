import {receiveTexts} from 'services/cms'
import {getText, setTexts} from 'services/texts'
import Component from '../react-component'
import React from 'react'
import ReactDOM from 'react-dom'
import {updateTextField, updateStartCoords} from '../actions'
import mainStore from '../store'
import injectTapEventPlugin from 'react-tap-event-plugin'
import SimpleMap from './simple-map'
injectTapEventPlugin();

import '../../fluidable.less'
import './map-page.less'

class MapPage extends Component {

  constructor (props) {
    super(props);
    this.state = mainStore.getState();
  }

  componentWillMount () {
    //navigator.geolocation.getCurrentPosition();
  }

  render () {

    return (<div className="map-wrapper">
      {SimpleMap({})}
    </div>);
  }
}


receiveTexts().then((res) => {
  setTexts(res.body);

  ReactDOM.render(<MapPage/>, document.getElementById('main'));
});

export default MapPage;