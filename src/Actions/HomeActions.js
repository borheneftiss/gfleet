import axios from 'axios';
import { URL } from './Config';
import {
  HOME_START_REFRESHING,
  HOME_GET_LIST_CARS_SUCCESS
} from './Types';

export const getListCars = () => {
  return (dispatch) => {
    dispatch({ type: HOME_START_REFRESHING });
    axios.get(`${URL}/cars`).then((response) => {
      console.log(response.data)
        dispatch({ type: HOME_GET_LIST_CARS_SUCCESS, payload: response.data });
    })
    .catch((error) => {})
  };
};
