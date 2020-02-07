import axios from 'axios';
import {axiosWithAuth} from '../../utils/axiosWithAuth';


export const GETTING_USER = "GETTING_USER";
export const GOT_USER = "GOT_USER";
export const GETTING_USER_FAIL = "GETTING_USER_FAIL";

export const getUserById = id => dispatch => {
  dispatch({type: GETTING_USER})
  axiosWithAuth().get(`https://droom-bt-tl.herokuapp.com/api/users/${id}`)
  .then( resp => {
    dispatch({type: GOT_USER, payload: resp.data});
  })
  .catch( err => {
    dispatch({type: GET_USER_FAIL, payload: err})
  })
}


export const UPDATING_USER = "UPDATING_USER"
export const UPDATED_USER = "UPDATED_USER"
export const UPDATING_USER_FAIL = "UPDATING_USER_FAIL"

export const updateUserById = (id, obj) => dispatch => {
  dispatch({type: UPDATING_USER});
  axiosWithAuth().put(`https://droom-bt-tl.herokuapp.com/api/users/${id}`, obj)
  .then( resp => {
    dispatch({type: UPDATED_USER, payload: obj})
  })
  .catch( err => {
    dispatch({type: UPDATING_USER_FAIL, payload: err})
  })
}


export const DELETING_USER = "DELETING_USER";
export const DELETED_USER = "DELETED_USER";
export const DELETING_USER_FAIL = "DELETING_USER_FAIL";

export const deleteUserById = id => dispatch => {
  dispatch({type: DELETING_USER})
  axiosWithAuth().delete(`https://droom-bt-tl.herokuapp.com/api/users/${id}`)
  .then( resp => {
    dispatch({type: DELETED_USER, payload: id})
  })
  .catch( err => {
    dispatch({type: DELETING_USER_FAIL, payload: err})
  })
}