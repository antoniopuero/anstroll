import React from 'react';
import mainStore from './store';


class Component extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount() {
    let self = this;
    this._subscription = mainStore.subscribe(function () {
      self.setState(mainStore.getState());
    });
  }

  componentWillUnmount() {
    this._subscription.dispose();
  }

}

export default Component;
