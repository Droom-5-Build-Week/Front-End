import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';

// user account related
export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const FETCH_USER_BY_ID_START = "FETCH_USER_BY_ID_START";
export const FETCH_USER_BY_ID_SUCCESS = "FETCH_USER_BY_ID_SUCCESS";
export const FETCH_USER_BY_ID_FAILURE = "FETCH_USER_BY_ID_FAILURE";

export const UPDATE_USER_BY_ID_START = "UPDATE_USER_BY_ID_START";
export const UPDATE_USER_BY_ID_SUCCESS = "UPDATE_USER_BY_ID_SUCCESS";
export const UPDATE_USER_BY_ID_FAILURE = "UPDATE_USER_BY_ID_FAILURE";

export const DELETE_USER_BY_ID_START = "DELETE_USER_BY_ID_START";
export const DELETE_USER_BY_ID_SUCCESS = "DELETE_USER_BY_ID_SUCCESS";
export const DELETE_USER_BY_ID_FAILURE = "DELETE_USER_BY_ID_FAILURE";

//experiance in user AKA job history
export const POST_USER_EXPERIANCE_FOR_USER_BY_ID_START = "POST_USER_EXPERIANCE_FOR_USER_BY_ID_START";
export const POST_USER_EXPERIANCE_FOR_USER_BY_ID_SUCCESS = "POST_USER_EXPERIANCE_FOR_USER_BY_ID_SUCCESS";
export const POST_USER_EXPERIANCE_FOR_USER_BY_ID_FAILURE = "POST_USER_EXPERIANCE_FOR_USER_BY_ID_FAILURE";

export const FETCH_USER_EXPERIANCES_FOR_USER_BY_ID_START = "FETCH_USER_EXPERIANCES_FOR_USER_BY_ID_START";
export const FETCH_USER_EXPERIANCES_FOR_USER_BY_ID_SUCCESS = "FETCH_USER_EXPERIANCES_FOR_USER_BY_ID_SUCCESS";
export const FETCH_USER_EXPERIANCES_FOR_USER_BY_ID_FAILURE = "FETCH_USER_EXPERIANCES_FOR_USER_BY_ID_FAILURE";

export const FETCH_USER_EXPERIANCE_FOR_USER_BY_EID_START = "FETCH_USER_EXPERIANCE_FOR_USER_BY_EID_START";
export const FETCH_USER_EXPERIANCE_FOR_USER_BY_EID_SUCCESS = "FETCH_USER_EXPERIANCE_FOR_USER_BY_EID_SUCCESS";
export const FETCH_USER_EXPERIANCE_FOR_USER_BY_EID_FAILURE = "FETCH_USER_EXPERIANCE_FOR_USER_BY_EID_FAILURE";

export const UPDATE_USER_EXPERIANCE_FOR_USER_BY_EID_START = "UPDATE_USER_EXPERIANCE_FOR_USER_BY_EID_START";
export const UPDATE_USER_EXPERIANCE_FOR_USER_BY_EID_SUCCESS = "UPDATE_USER_EXPERIANCE_FOR_USER_BY_EID_SUCCESS";
export const UPDATE_USER_EXPERIANCE_FOR_USER_BY_EID_FAILURE = "UPDATE_USER_EXPERIANCE_FOR_USER_BY_EID_FAILURE";

export const DELETE_USER_EXPERIANCE_FOR_USER_BY_EID_START = "DELETE_USER_EXPERIANCE_FOR_USER_BY_EID_START";
export const DELETE_USER_EXPERIANCE_FOR_USER_BY_EID_SUCCESS = "DELETE_USER_EXPERIANCE_FOR_USER_BY_EID_SUCCESS";
export const DELETE_USER_EXPERIANCE_FOR_USER_BY_EID_FAILURE = "DELETE_USER_EXPERIANCE_FOR_USER_BY_EID_FAILURE";

//Company account related
export const FETCH_ALL_COMPANIES_START = "FETCH_ALL_COMPANIES_START";
export const FETCH_ALL_COMPANIES_SUCCESS = "FETCH_ALL_COMPANIES_SUCCESS";
export const FETCH_ALL_COMPANIES_FAILURE = "FETCH_ALL_COMPANIES_FAILURE";

export const FETCH_A_COMPANY_BY_ID_START = "FETCH_A_COMPANY_BY_ID_START";
export const FETCH_A_COMPANY_BY_ID_SUCCESS = "FETCH_A_COMPANY_BY_ID_SUCCESS";
export const FETCH_A_COMPANY_BY_ID_FAILURE = "FETCH_A_COMPANY_BY_ID_FAILURE";

export const UPDATE_A_COMPANY_BY_ID_START = "UPDATE_A_COMPANY_BY_ID_START";
export const UPDATE_A_COMPANY_BY_ID_SUCCESS = "UPDATE_A_COMPANY_BY_ID_SUCCESS";
export const UPDATE_A_COMPANY_BY_ID_FAILURE = "UPDATE_A_COMPANY_BY_ID_FAILURE";

export const DELETE_A_COMPANY_BY_ID_START = "DELETE_A_COMPANY_BY_ID_START";
export const DELETE_A_COMPANY_BY_ID_SUCCESS = "DELETE_A_COMPANY_BY_ID_SUCCESS";
export const DELETE_A_COMPANY_BY_ID_FAILURE = "DELETE_A_COMPANY_BY_ID_FAILURE";

//Jobs in Companies
export const POST_JOB_FOR_COMPANY_START = "POST_JOB_FOR_COMPANY_START";
export const POST_JOB_FOR_COMPANY_SUCCESS = "POST_JOB_FOR_COMPANY_SUCCESS";
export const POST_JOB_FOR_COMPANY_FAILURE = "POST_JOB_FOR_COMPANY_FAILURE";

export const FETCH_JOBS_FOR_COMPANY_START = "FETCH_JOBS_FOR_COMPANY_START";
export const FETCH_JOBS_FOR_COMPANY_SUCCESS = "FETCH_JOBS_FOR_COMPANY_SUCCESS";
export const FETCH_JOBS_FOR_COMPANY_FAILURE = "FETCH_JOBS_FOR_COMPANY_FAILURE";

export const FETCH_JOB_FOR_COMPANY_BY_ID_START = "FETCH_JOB_FORS_COMPANY_BY_ID_START";
export const FETCH_JOB_FOR_COMPANY_BY_ID_SUCCESS = "FETCH_JOB_FORS_COMPANY_BY_ID_SUCCESS";
export const FETCH_JOB_FOR_COMPANY_BY_ID_FAILURE = "FETCH_JOB_FORS_COMPANY_BY_ID_FAILURE";

export const UPDATE_JOB_FOR_COMPANY_BY_ID_START = "UPDATE_JOB_FORS_COMPANY_BY_ID_START";
export const UPDATE_JOB_FOR_COMPANY_BY_ID_SUCCESS = "UPDATE_JOB_FORS_COMPANY_BY_ID_SUCCESS";
export const UPDATE_JOB_FOR_COMPANY_BY_ID_FAILURE = "UPDATE_JOB_FORS_COMPANY_BY_ID_FAILURE";

export const DELETE_JOB_FOR_COMPANY_BY_ID_START = "DELETE_JOB_FORS_COMPANY_BY_ID_START";
export const DELETE_JOB_FOR_COMPANY_BY_ID_SUCCESS = "DELETE_JOB_FORS_COMPANY_BY_ID_SUCCESS";
export const DELETE_JOB_FOR_COMPANY_BY_ID_FAILURE = "DELETE_JOB_FORS_COMPANY_BY_ID_FAILURE";

//GET JOB BY TYPE
export const FETCH_JOBS_BY_TYPE_START = "FETCH_JOBS_BY_TYPE_START";
export const FETCH_JOBS_BY_TYPE_SUCCESS = "FETCH_JOBS_BY_TYPE_SUCCESS";
export const FETCH_JOBS_BY_TYPE_FAILURE = "FETCH_JOBS_BY_TYPE_FAILURE";

//Matching
export const FETCH_MATCH_JP_START = "FETCH_MATCH_JP_START";
export const FETCH_MATCH_JP_SUCCESS = "FETCH_MATCH_JP_SUCCESS";
export const FETCH_MATCH_JP_FAILURE = "FETCH_MATCH_JP_FAILURE";

export const POST_MATCH_START = "POST_MATCH_JP_START";
export const POST_MATCH_SUCCESS = "POST_MATCH_JP_SUCCESS";
export const POST_MATCH_FAILURE = "POST_MATCH_JP_FAILURE";

export const FETCH_MATCHS_JS_START = "FETCH_MATCH_JS_START";
export const FETCH_MATCHS_JS_SUCCESS = "FETCH_MATCH_JS_SUCCESS";
export const FETCH_MATCHS_JS_FAILURE = "FETCH_MATCH_JS_FAILURE";

export const FETCH_MATCH_JS_START = "FETCH_MATCH_JS_START";
export const FETCH_MATCH_JS_SUCCESS = "FETCH_MATCH_JS_SUCCESS";
export const FETCH_MATCH_JS_FAILURE = "FETCH_MATCH_JS_FAILURE";

const apiURL = 'https://droom-bt-tl.herokuapp.com/api/';

export const getUsers = () => dispatch =>{
  dispatch({ type: FETCH_USERS_START});
  axiosWithAuth().get('/users/')
  .then( res => dispatch({type: FETCH_USERS_SUCCESS, payload: res.data})) // needs to be updated based on the info sent back.
  .catch( err => dispatch({type: FETCH_USERS_FAILURE, payload: err.response})) // needs to be updated based on the info sent back.
}

export const getUsersById = (id) => dispatch =>{
  dispatch({ type: FETCH_USER_BY_ID_START});
  axiosWithAuth().get(`/users/${id}`)
  .then( res => dispatch({type: FETCH_USER_BY_ID_SUCCESS, payload: res.data})) // needs to be updated based on the info sent back.
  .catch( err => dispatch({type: FETCH_USER_BY_ID_FAILURE, payload: err.response})) // needs to be updated based on the info sent back.
}

export const updateUserById = (id) => dispatch =>{
  dispatch({ type: UPDATE_USER_BY_ID_START});
  axiosWithAuth().put(`/users/${id}`)
  .then( res => dispatch({type: UPDATE_USER_BY_ID_SUCCESS, payload: res.data})) // needs to be updated based on the info sent back.
  .catch( err => dispatch({type: UPDATE_USER_BY_ID_FAILURE, payload: err.response})) // needs to be updated based on the info sent back.
}

export const deleteUserById = (id) => dispatch =>{
  dispatch({ type: DELETE_USER_BY_ID_START});
  axiosWithAuth().delete(`/users/${id}`)
  .then( res => dispatch({type: DELETE_USER_BY_ID_SUCCESS, payload: res.data})) // needs to be updated based on the info sent back.
  .catch( err => dispatch({type: DELETE_USER_BY_ID_FAILURE, payload: err.response})) // needs to be updated based on the info sent back.
}

export const createExperianceByUserId = (id ,data) => dispatch =>{
  dispatch({ type: POST_USER_EXPERIANCE_FOR_USER_BY_ID_START});
  axiosWithAuth().post(`/users/${id}/experiences`, data)
  .then( res => dispatch({type: POST_USER_EXPERIANCE_FOR_USER_BY_ID_SUCCESS, payload: res.data})) // needs to be updated based on the info sent back.
  .catch( err => dispatch({type: POST_USER_EXPERIANCE_FOR_USER_BY_ID_FAILURE, payload: err.response})) // needs to be updated based on the info sent back.
}

export const getExperiancesForUser = (uid, id) => dispatch =>{
  dispatch({ type: FETCH_USER_EXPERIANCES_FOR_USER_BY_ID_START});
  axiosWithAuth().get(`/users/${uid}/experiences/${id}`)
  .then( res => dispatch({type: FETCH_USER_EXPERIANCES_FOR_USER_BY_ID_SUCCESS, payload: res.data})) // needs to be updated based on the info sent back.
  .catch( err => dispatch({type: FETCH_USER_EXPERIANCES_FOR_USER_BY_ID_FAILURE, payload: err.response})) // needs to be updated based on the info sent back.
}

export const getExperiancesForUserById = (uid, id) => dispatch =>{
  dispatch({type: FETCH_USER_EXPERIANCE_FOR_USER_BY_EID_START});
  axiosWithAuth().get(`/users/${uid}/experiences/${id}`)
  .then( res => dispatch({type: FETCH_USER_EXPERIANCE_FOR_USER_BY_EID_SUCCESS, payload: res.data}))
  .catch(err=> dispatch({type: FETCH_USER_EXPERIANCE_FOR_USER_BY_EID_FAILURE, payload: err.response}))
}

export const getExperiancesForUserById = (uid, id) => dispatch =>{
  dispatch({type: FETCH_USER_EXPERIANCE_FOR_USER_BY_EID_START});
  axiosWithAuth().get(`/users/${uid}/experiences/${id}`)
  .then( res => dispatch({type: FETCH_USER_EXPERIANCE_FOR_USER_BY_EID_SUCCESS, payload: res.data}))
  .catch(err=> dispatch({type: FETCH_USER_EXPERIANCE_FOR_USER_BY_EID_FAILURE, payload: err.response}))
}

export const updateExperiancesForUserById = (uid, id) => dispatch =>{
  dispatch({type: UPDATE_USER_EXPERIANCE_FOR_USER_BY_EID_START});
  axiosWithAuth().get(`/users/${uid}/experiences/${id}`)
  .then( res => dispatch({type: UPDATE_USER_EXPERIANCE_FOR_USER_BY_EID_SUCCESS, payload: res.data}))
  .catch(err=> dispatch({type: UPDATE_USER_EXPERIANCE_FOR_USER_BY_EID_FAILURE, payload: err.response}))
}

export const deleteExperiancesForUserById = (uid, id) => dispatch =>{
  dispatch({type: DELETE_USER_EXPERIANCE_FOR_USER_BY_EID_START});
  axiosWithAuth().get(`/users/${uid}/experiences/${id}`)
  .then( res => dispatch({type: DELETE_USER_EXPERIANCE_FOR_USER_BY_EID_SUCCESS, payload: res.data}))
  .catch(err=> dispatch({type: DELETE_USER_EXPERIANCE_FOR_USER_BY_EID_FAILURE, payload: err.response}))
}

export const getAllCompanies = () => dispatch =>{
  dispatch({type: FETCH_ALL_COMPANIES_START});
  axiosWithAuth().get('/companies')
  .then( res => dispatch({type: FETCH_ALL_COMPANIES_SUCCESS, payload: res.data}))
  .catch(err=> dispatch({type: FETCH_ALL_COMPANIES_FAILURE, payload: err.response}))
}

export const getCompany = (id) => dispatch =>{
  dispatch({type: FETCH_A_COMPANY_BY_ID_START});
  axiosWithAuth().get(`/companies/:${id}`)
  .then( res => dispatch({type: FETCH_A_COMPANY_BY_ID_SUCCESS, payload: res.data}))
  .catch(err=> dispatch({type: FETCH_A_COMPANY_BY_ID_FAILURE, payload: err.response}))
}

export const updateCompany = (id) => dispatch =>{
  dispatch({type: UPDATE_A_COMPANY_BY_ID_START});
  axiosWithAuth().put(`/companies/:${id}`)
  .then( res => dispatch({type: UPDATE_A_COMPANY_BY_ID_SUCCESS, payload: res.data}))
  .catch(err=> dispatch({type: UPDATE_A_COMPANY_BY_ID_FAILURE, payload: err.response}))
}

export const deleteCompany = (id) => dispatch =>{
  dispatch({type: DELETE_A_COMPANY_BY_ID_START});
  axiosWithAuth().get(`/companies/:${id}`)
  .then( res => dispatch({type: DELETE_A_COMPANY_BY_ID_SUCCESS, payload: res.data}))
  .catch(err=> dispatch({type: DELETE_A_COMPANY_BY_ID_FAILURE, payload: err.response}))
}

export const addJobJP = (id, data) => dispatch =>{
  dispatch({type: POST_JOB_FOR_COMPANY_START});
  axiosWithAuth().post(`/companies/:${id}/jobs`, data)
  .then( res => dispatch({type: POST_JOB_FOR_COMPANY_SUCCESS, payload: res.data}))
  .catch(err=> dispatch({type: POST_JOB_FOR_COMPANY_FAILURE, payload: err.response}))
}

export const getAllJobsJP = (id) => dispatch =>{
  dispatch({type: FETCH_JOBS_FOR_COMPANY_START});
  axiosWithAuth().get(`/companies/:${id}/jobs`)
  .then( res => dispatch({type: FETCH_JOBS_FOR_COMPANY_SUCCESS, payload: res.data}))
  .catch(err=> dispatch({type: FETCH_JOBS_FOR_COMPANY_FAILURE, payload: err.response}))
}

export const getJobByIdJP = (cid, id) => dispatch =>{
  dispatch({type: FETCH_JOB_FOR_COMPANY_BY_ID_START});
  axiosWithAuth().get(`/companies/:${cid}/jobs/:${id}`)
  .then( res => dispatch({type: FETCH_JOB_FOR_COMPANY_BY_ID_SUCCESS, payload: res.data}))
  .catch(err=> dispatch({type: FETCH_JOB_FOR_COMPANY_BY_ID_FAILURE, payload: err.response}))
}

export const updateJobByIdJP = (cid, id) => dispatch =>{
  dispatch({type: UPDATE_JOB_FOR_COMPANY_BY_ID_START});
  axiosWithAuth().put(`/companies/:${cid}/jobs/:${id}`)
  .then( res => dispatch({type: UPDATE_JOB_FOR_COMPANY_BY_ID_SUCCESS, payload: res.data}))
  .catch(err=> dispatch({type: UPDATE_JOB_FOR_COMPANY_BY_ID_FAILURE, payload: err.response}))
}

export const DeleteJobById = (cid, id) => dispatch =>{
  dispatch({type: DELETE_JOB_FOR_COMPANY_BY_ID_START});
  axiosWithAuth().delete(`/companies/:${cid, id}`)
  .then( res => dispatch({type: DELETE_JOB_FOR_COMPANY_BY_ID_SUCCESS, payload: res.data}))
  .catch(err=> dispatch({type: DELETE_JOB_FOR_COMPANY_BY_ID_FAILURE, payload: err.response}))
}

export const getJobByType = (type) => dispatch =>{
  dispatch({type: FETCH_JOBS_BY_TYPE_START});
  axiosWithAuth().get(`/jobs/:${type}`)
  .then( res => dispatch({type: FETCH_JOBS_BY_TYPE_SUCCESS, payload: res.data}))
  .catch(err=> dispatch({type: FETCH_JOBS_BY_TYPE_FAILURE, payload: err.response}))
}

export const getMatchsForJP = (id) => dispatch =>{
  dispatch({ type: FETCH_MATCHS_JP_START});
  axiosWithAuth().get(`/companies/:${id}/matches`)
    .then( res => dispatch({type: FETCH_MATCHS_JP_SUCCESS, payload: res.data})) // needs to be updated based on the info sent back.
    .catch( err => dispatch({type: FETCH_MATCHS_JP_FAILURE, payload: err.response})) // needs to be updated based on the info sent back.
}

export const CreateMatch = (id) => dispatch =>{
  dispatch({ type: POST_MATCH_START});
  axiosWithAuth().post(`/users/:${id}/matches`)
    .then( res => dispatch({type: POST_MATCH_SUCCESS, payload: res.data})) // needs to be updated based on the info sent back.
    .catch( err => dispatch({type: POST_MATCH_FAILURE, payload: err.response})) // needs to be updated based on the info sent back.
}

export const getAllMatchsForJS = (id) => dispatch =>{
  dispatch({ type: FETCH_MATCHS_JS_START});
  axiosWithAuth().get(`/users/:${id}/matches`)
    .then( res => dispatch({type: FETCH_MATCHS_JP_SUCCESS, payload: res.data})) // needs to be updated based on the info sent back.
    .catch( err => dispatch({type: FETCH_MATCHS_JP_FAILURE, payload: err.response})) // needs to be updated based on the info sent back.
}

export const getMatchForJS = (uid, id) => dispatch =>{
  dispatch({ type: FETCH_MATCH_JS_START});
  axiosWithAuth(`/users/:${uid}/matches/:${id}`)
    .then( res => dispatch({type: FETCH_MATCH_JP_SUCCESS, payload: res.data})) // needs to be updated based on the info sent back.
    .catch( err => dispatch({type: FETCH_MATCH_JP_FAILURE, payload: err.response})) // needs to be updated based on the info sent back.
}