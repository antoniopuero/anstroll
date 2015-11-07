import {getText, setTexts} from '../../services/texts'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SimpleMap from './simple-map'

//import './map-page.less'

class MapPage extends Component {

  constructor (props) {
    super(props);
    this.state = {};
  }

  componentWillMount () {
  }

  render () {
    return (<div className="map-wrapper">
      {SimpleMap({})}
    </div>);
  }
}

export default MapPage;