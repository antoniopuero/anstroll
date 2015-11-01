import venues from 'services/venues'
import {getText, setTexts} from 'services/texts'
import React, {Component} from 'react'
import {TextField, CardMedia, CardTitle, DropDownMenu} from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {updateInputValueAction, updateCoords} from '../../action-creators';
import store from '../../store';
injectTapEventPlugin();

import './starter-point.less'

class App extends Component {

  constructor (props) {
    super(props);
    this.state = store.getState();
  }

  componentWillMount () {
    navigator.geolocation.getCurrentPosition(coords => {
      store.dispatch(updateCoords(coords));
    });
  }

  _handleFloatingInputChange (e) {
    store.dispatch(updateInputValueAction('textField', e.target.value));
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
            value={this.state.strollModel.textField}
            onChange={this._handleFloatingInputChange}/>
        </div>
        <div className="col-mb-12">
        </div>
      </div>

    </div>);
  }
}

export default App;