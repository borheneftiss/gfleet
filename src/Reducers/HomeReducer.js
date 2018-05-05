import {
    HOME_START_REFRESHING,
    HOME_GET_LIST_CARS_SUCCESS,
    ON_SIGN_OUT
} from '../Actions/Types';

const INITIAL_STATE = {
    refreshing: true,
    cars: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
        case HOME_START_REFRESHING:
            return { ...state, refreshing: true };
        case HOME_GET_LIST_CARS_SUCCESS:
            return { ...state, cars: action.payload, refreshing: false };
        case ON_SIGN_OUT:
            return { ...INITIAL_STATE };
        default:
            return state;
	}
};
