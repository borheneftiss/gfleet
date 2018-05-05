import { StackNavigator } from 'react-navigation';

import AppLoading from '../Screens/AppLoading';
import SignIn from '../Screens/SignIn';
import MapDetail from '../Screens/MapDetail';

import { tabNavigator } from './TabNavigator';
import { Colors } from '../Constants';
//******** app configuration navigation *********/
export const AppNavigator = StackNavigator(
    {
      AppLoading: {
        screen: AppLoading,
        navigationOptions: () => ({
          gesturesEnabled: false,
          header: null
        })
      },
      SignIn: {
        screen: SignIn,
        navigationOptions: () => ({
          title: 'Sign In',
          gesturesEnabled: false,
          headerBackTitle: null,
          headerTintColor: '#FFFFFF',
          headerStyle: { backgroundColor: Colors.primaryColor },
        })
      },
      MainApp: { screen: tabNavigator },
      MapDetail: {
        screen: MapDetail,
        navigationOptions: () => ({
          title: 'MapDetail',
          gesturesEnabled: false,
          headerBackTitle: null,
          headerTintColor: '#FFFFFF',
          headerStyle: { backgroundColor: Colors.primaryColor },
        })
      },
    },
    {
      initialRouteName: 'AppLoading',
    }
);
