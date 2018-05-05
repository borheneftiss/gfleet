import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Colors } from '../Constants';
//tabs Screens
import Home from '../Screens/Home';
import Map from '../Screens/Map';
import Profile from '../Screens/Profile';
import Notifications from '../Screens/Notifications';

/******* Tabs configuration navigation *******/
export const tabNavigator = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
          title: 'Home',
          tabBarIcon: ({ tintColor }) => (
             <Icon name={'ios-contacts-outline'} size={36} color={tintColor} />
          )
      })
    },
    Map: {
      screen: Map,
      navigationOptions: () => ({
          title: 'Map',
          tabBarIcon: ({ tintColor }) => (
             <Icon name={'ios-navigate-outline'} size={36} color={tintColor} />
          )
      })
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: () => ({
          title: 'Notifications',
          tabBarIcon: ({ tintColor }) => (
             <Icon name={'ios-notifications-outline'} size={36} color={tintColor} />
          )
      })
    },
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
          title: 'Profile',
          tabBarIcon: ({ tintColor }) => (
             <Icon name={'ios-contact-outline'} size={36} color={tintColor} />
          )
      })
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    lazy: false,
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      activeTintColor: '#28c5c2',
      showIcon: true,
      showLabel: false
    },
    navigationOptions: () => ({
      tabBarVisible: true,
      gesturesEnabled: false,
      headerTintColor: Colors.wihteColor,
      headerStyle: { backgroundColor: Colors.primaryColor },
    })
  }
);
