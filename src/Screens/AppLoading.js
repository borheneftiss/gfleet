import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImageBackground, View, ActivityIndicator, Text, AsyncStorage } from 'react-native';

import { isSignedIn, navigateInit } from '../Utils';
import { setUserInReducer, isConnectedApp, isRefreshConnexionApp } from '../Actions';
import { IMAGE_BACKGROUND } from '../Utils/Images';

class AppLoading extends Component {
   componentDidMount() {
    //AsyncStorage.removeItem('user');
    console.log('fdfgdfgddfg');
    this.props.navigation.replace('MainApp');
    /*AsyncStorage.getItem('user').then(value => {
      console.log(value)
      const user = JSON.parse(value);
      console.log('user', user);
      if (user) {
        this.props.setUserInReducer(user);
        this.props.navigation.replace('MainApp');
      } else {
        this.props.navigation.replace('SignIn');
      }
    })
    .catch(e => console.log('err', e));*/
    
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <ActivityIndicator size="large" color="#0000ff" />
         <Text style={{ fontSize: 18, marginTop: 16 }}>Chargement...</Text>
      </View>
    );
  }
}

export default connect(null, { setUserInReducer, isConnectedApp, isRefreshConnexionApp })(AppLoading);
