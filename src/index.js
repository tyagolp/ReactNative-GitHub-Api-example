import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import './config/ReactotronConfig';
import './config/DevToolsConfig';

import createNavigator from '~/routes';
import console = require('console');

export default class extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Githuber:username');
    //console.tron.log(userLogged)
    this.setState({
      userChecked: true,
      userLogged: !!username,
    });
  }

  render() {
    const { userChecked, userLogged } = this.state;

    if (!userChecked) return null;

    const Routes = createNavigator(userLogged);

    return <Routes />;
  }
}