import React, { Component } from 'react';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import { AppNavigator } from './AppNavigator';

export const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const addListener = createReduxBoundAddListener("root");

class AppWithNavigationState extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };
  render() {
    return <AppNavigator navigation={addNavigationHelpers({ dispatch: this.props.dispatch, state: this.props.nav, addListener })} />;
  }
}
const mapStateToProps = ({ nav }) => ({
  nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
