
import axios from 'axios';
import { SET_MENUS } from './actionTypes';
import { config } from '../config';

const baseUrl = config.API_BASE_URL;

/**
 *
 *
 * @export
 * @param {*} menus
 * @returns {object} object
 */
export function setMenus(menus) {
  return {
    type: SET_MENUS,
    payload: menus
  };
}


export const getUpComingMenus = () => (dispatch) => {
  axios.get(`${baseUrl}/menu`)
    .then((response) => {
      dispatch(setMenus(response.data));
    });
};
