import {
    MAP_GET_LIST_CORRDINATE_CARS_SUCCESS,
    ON_SIGN_OUT
} from '../Actions/Types';

const INITIAL_STATE = {
    cars: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
        case MAP_GET_LIST_CORRDINATE_CARS_SUCCESS:
            return { ...state, cars: action.payload };
        case ON_SIGN_OUT:
            return { ...INITIAL_STATE };
        default:
            return state;
	}
};
