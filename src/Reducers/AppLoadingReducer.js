import {
    SET_USER_IN_REDUCER,
    ON_SIGN_OUT
} from '../Actions/Types';

const INITIAL_STATE = {
    user: null,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
        case SET_USER_IN_REDUCER:
          return { ...state, user: action.payload };
        case ON_SIGN_OUT:
          return { ...state, user: null };
        default:
          return state;
	}
};
