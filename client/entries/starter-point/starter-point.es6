import venues from 'services/venues'
import {receiveTexts} from 'services/cms'
import {getText, setTexts} from 'services/texts'
import Component from '../react-component'
import React from 'react'
import ReactDOM from 'react-dom'
import {TextField, CardMedia, CardTitle} from 'material-ui'
import {updateTextField, updateStartCoords} from '../actions'
import mainStore from '../store'

import './starter-point.less'

class App extends Component {

  constructor (props) {
    super(props);
    this.state = mainStore.getState();
  }

  componentWillMount () {
    navigator.geolocation.getCurrentPosition(updateStartCoords);
  }

  _handleFloatingInputChange (e) {
    updateTextField(e.target.value);
  }

  render () {

    return (<div>
      <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
        <img src="http://lorempixel.com/g/600/337/people/"/>
      </CardMedia>

      <TextField
        hintText={getText('floatingLabelText')}
        floatingLabelText={getText('floatingLabelText')}
        value={this.state.textInputValue}
        onChange={this._handleFloatingInputChange}/>
    </div>);
  }
}


receiveTexts().then((res) => {
  setTexts(res.body);

  ReactDOM.render(<App/>, document.getElementById('main'));
});

export default App;