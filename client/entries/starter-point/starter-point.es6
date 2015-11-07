import venues from '../../services/venues'
import {getText, setTexts} from '../../services/texts'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {TextField, CardMedia, CardTitle, DropDownMenu} from 'material-ui'
import * as actionCreators from '../../action-creators'
import store from '../../store'


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

import './starter-point.less'

class App extends Component {

  constructor (props) {
    super(props);
  }

  componentWillMount () {
    navigator.geolocation.getCurrentPosition(coords => {
      this.props.actions.updateCoords(coords);
    });
  }

  _handleFloatingInputChange (e) {
    this.props.actions.updateInputValueAction('textField', e.target.value);
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
            value={this.props.strollModel.textField}
            onChange={this._handleFloatingInputChange.bind(this)}/>
        </div>
        <div className="col-mb-12">
        </div>
      </div>

    </div>);
  }
}

export default connect(state=>state, mapDispatchToProps)(App);