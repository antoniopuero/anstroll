import venues from 'services/venues'
import {receiveTexts} from 'services/cms'
import {getText, setTexts} from 'services/texts'
import Component from '../react-component'
import React from 'react'
import ReactDOM from 'react-dom'
import {TextField, CardMedia, CardTitle, DropDownMenu} from 'material-ui'
import {updateTextField, updateStartCoords} from '../actions'
import mainStore from '../store'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

import './starter-point.less'
import '../../fluidable.less'

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

  _handleDropdownChange (e) {
    console.log(e)
  }

  render () {

    return (<div>
      <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
        <img src="http://lorempixel.com/g/600/337/people/"/>
      </CardMedia>

      <div className="col-group">
        <div className="col-mb-12">
          <TextField
            hintText={getText('floatingLabelText')}
            floatingLabelText={getText('floatingLabelText')}
            value={this.state.textInputValue}
            onChange={this._handleFloatingInputChange}/>
        </div>
        <div className="col-mb-12">
          <DropDownMenu menuItems={this.state.menuItems} onChange={this._handleDropdownChange}/>
        </div>
      </div>

    </div>);
  }
}


receiveTexts().then((res) => {
  setTexts(res.body);

  ReactDOM.render(<App/>, document.getElementById('main'));
});

export default App;