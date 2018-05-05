import { combineReducers } from 'redux';
import NavigationReducer from './NavigationReducer';
import AppLoadingReducer from './AppLoadingReducer';
import SignInReducer from './SignInReducer';
import HomeReducer from './HomeReducer';
import MapReducer from './MapReducer';

export default combineReducers({
	nav: NavigationReducer,
	signIn: SignInReducer,
	appLoading: AppLoadingReducer,
	home: HomeReducer,
	map: MapReducer
});
