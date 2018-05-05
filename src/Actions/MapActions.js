import axios from 'axios';
import { URL } from './Config';
import {
  MAP_GET_LIST_CORRDINATE_CARS_SUCCESS
} from './Types';

export const getListCorrdinateCars = () => {
  return (dispatch) => {
    axios.get(`${URL}/cars`).then((response) => {
      console.log(response.data)
        dispatch({ type: MAP_GET_LIST_CORRDINATE_CARS_SUCCESS, payload: response.data });
    })
    .catch((error) => {})
  };
};