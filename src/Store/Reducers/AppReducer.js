//import actions
import{
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,

  FETCH_USER_BY_ID_START,
  FETCH_USER_BY_ID_SUCCESS,
  FETCH_USER_BY_ID_FAILURE,

  UPDATE_USER_BY_ID_START,
  UPDATE_USER_BY_ID_SUCCESS,
  UPDATE_USER_BY_ID_FAILURE,

  DELETE_USER_BY_ID_START,
  DELETE_USER_BY_ID_SUCCESS,
  DELETE_USER_BY_ID_FAILURE,

  POST_USER_EXPERIANCE_FOR_USER_BY_ID_START,
  POST_USER_EXPERIANCE_FOR_USER_BY_ID_SUCCESS,
  POST_USER_EXPERIANCE_FOR_USER_BY_ID_FAILURE,

  FETCH_USER_EXPERIANCES_FOR_USER_BY_ID_START,
  FETCH_USER_EXPERIANCES_FOR_USER_BY_ID_SUCCESS,
  FETCH_USER_EXPERIANCES_FOR_USER_BY_ID_FAILURE,

  FETCH_USER_EXPERIANCE_FOR_USER_BY_EID_START,
  FETCH_USER_EXPERIANCE_FOR_USER_BY_EID_SUCCESS,
  FETCH_USER_EXPERIANCE_FOR_USER_BY_EID_FAILURE,

  UPDATE_USER_EXPERIANCE_FOR_USER_BY_EID_START,
  UPDATE_USER_EXPERIANCE_FOR_USER_BY_EID_SUCCESS,
  UPDATE_USER_EXPERIANCE_FOR_USER_BY_EID_FAILURE,

  DELETE_USER_EXPERIANCE_FOR_USER_BY_EID_START,
  DELETE_USER_EXPERIANCE_FOR_USER_BY_EID_SUCCESS,
  DELETE_USER_EXPERIANCE_FOR_USER_BY_EID_FAILURE,

  FETCH_ALL_COMPANIES_START,
  FETCH_ALL_COMPANIES_SUCCESS,
  FETCH_ALL_COMPANIES_FAILURE,

  FETCH_A_COMPANY_BY_ID_START,
  FETCH_A_COMPANY_BY_ID_SUCCESS,
  FETCH_A_COMPANY_BY_ID_FAILURE,

  UPDATE_A_COMPANY_BY_ID_START,
  UPDATE_A_COMPANY_BY_ID_SUCCESS,
  UPDATE_A_COMPANY_BY_ID_FAILURE,

  DELETE_A_COMPANY_BY_ID_START,
  DELETE_A_COMPANY_BY_ID_SUCCESS,
  DELETE_A_COMPANY_BY_ID_FAILURE,

  POST_JOB_FOR_COMPANY_START,
  POST_JOB_FOR_COMPANY_SUCCESS,
  POST_JOB_FOR_COMPANY_FAILURE,

  FETCH_JOBS_FOR_COMPANY_START,
  FETCH_JOBS_FOR_COMPANY_SUCCESS,
  FETCH_JOBS_FOR_COMPANY_FAILURE,

  FETCH_JOB_FOR_COMPANY_BY_ID_START,
  FETCH_JOB_FOR_COMPANY_BY_ID_SUCCESS,
  FETCH_JOB_FOR_COMPANY_BY_ID_FAILURE,

  UPDATE_JOB_FOR_COMPANY_BY_ID_START,
  UPDATE_JOB_FOR_COMPANY_BY_ID_SUCCESS,
  UPDATE_JOB_FOR_COMPANY_BY_ID_FAILURE,

  DELETE_JOB_FOR_COMPANY_BY_ID_START,
  DELETE_JOB_FOR_COMPANY_BY_ID_SUCCESS,
  DELETE_JOB_FOR_COMPANY_BY_ID_FAILURE,

  FETCH_JOBS_BY_TYPE_START,
  FETCH_JOBS_BY_TYPE_SUCCESS,
  FETCH_JOBS_BY_TYPE_FAILURE,

  FETCH_MATCH_JP_START,
  FETCH_MATCH_JP_SUCCESS,
  FETCH_MATCH_JP_FAILURE,

  POST_MATCH_START,
  POST_MATCH_SUCCESS,
  POST_MATCH_FAILURE,

  FETCH_MATCHS_JS_START,
  FETCH_MATCHS_JS_SUCCESS,
  FETCH_MATCHS_JS_FAILURE,

  FETCH_MATCH_JS_START,
  FETCH_MATCH_JS_SUCCESS,
  FETCH_MATCH_JS_FAILURE,

  getAllMatchsForJS

} from '../Actions/AppActions'


//set up init. state obj.

const initialState = {
  allUsers: {},
  readyForUpdate: false,
  isFetching : false,
  isPutting: false,
  isDeleting: false,
  userType: 1,
  error: "",
  id: -1,
	seeker: {
    id: 0,
    name:"",
    email:"",
    location:"",
		experiences: [{
			id: "",
			company_name: "",
			job_title: "",
			user_id: "",
		}],
		matched_jobs:[{
			name: 0,
			position_name: "",
			type: "",
			job_bio: "",
			skills: "",
		}],
		personal_interests:"",
		personal_skills:""
	},
	provider:{
		id: 0,
		name: "",
		location: "",
		email: "",
		jobs: [],
		matches: []
	}
	
}
//create reducer function
const userReducer = (state = initialState, action) => {

  if(action.type.includes("SUCCESS") || action.type.includes("FAILURE")) {
    console.log('reducer: action', action, 'state', state)
  }

  switch (action.type) {
    case FETCH_USERS_START:
      return{
        ...state, 
        isFetching:true
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        allUsers: action.payload
      }
      
    case FETCH_USERS_FAILURE:
      return{
        ...state,
        isFetching: false,
        error: action.payload
      }

    case FETCH_USER_BY_ID_START:
      return{
        ...state, 
        isFetching:true,
        id: action.payload
      }
    case FETCH_USER_BY_ID_SUCCESS:
      // console.log(action);

      const obj = {
        ...state,
        isFetching: false,
        id: action.payload.id,
        seeker: {
          ...state.seeker,
          name: action.payload.name,
          email: action.payload.email,
          location: action.payload.location,
          personal_skills: action.payload.personal_skills,
          personal_interests: action.payload.personal_interests,
          experiences: action.payload.experiences
        }
      }

      return obj;

    case FETCH_USER_BY_ID_FAILURE:
      return{
        ...state,
        isFetching:false
      }

    case UPDATE_USER_BY_ID_START:
      return{
        ...state,
        isPutting: true
      }
    case UPDATE_USER_BY_ID_SUCCESS:
      const obj = {...seeker, seeker: action.payload}
      return{
        ...state,
        isPutting:false,
        seeker: obj
      }
    case UPDATE_USER_BY_ID_FAILURE:
      return{
        ...seeker,
        isPutting:false,
        error: action.payload
      }

    case DELETE_USER_BY_ID_START:
      return{
        ...state,
        isDeleting:true
      }
    case DELETE_USER_BY_ID_SUCCESS:
      return {
        ...state,
        readyForUpdate: true
      }
    case DELETE_USER_BY_ID_FAILURE:
      return{
        ...state,
        isDeleting:false,
        error: action.payload
      }

    case POST_USER_EXPERIANCE_FOR_USER_BY_ID_START:
      return{
        ...state,
        isPutting: true
      }
    case POST_USER_EXPERIANCE_FOR_USER_BY_ID_SUCCESS:
      userobj = {...state, seekers:{...experiences ,experiences: action.payload}};
      return{
        ...state,
        isPutting:false,
        state: userobj
      }

    case POST_USER_EXPERIANCE_FOR_USER_BY_ID_FAILURE:
      return{
        ...state,
        isPutting:false,
        error: action.payload
      }

    case FETCH_USER_EXPERIANCES_FOR_USER_BY_ID_START:
      return{
        ...state,
        isFetching:true
      }
    case FETCH_USER_EXPERIANCES_FOR_USER_BY_ID_SUCCESS:
      //action.payload
      return {
        ...state,
        seeker: {
          ...state.seeker,
          experiences: action.payload
        }
      }
    case FETCH_USER_EXPERIANCES_FOR_USER_BY_ID_FAILURE:
      return{
        ...state,
        isFetching:false,
        error = action.payload
      }

    case FETCH_USER_EXPERIANCE_FOR_USER_BY_EID_START:
    case FETCH_USER_EXPERIANCE_FOR_USER_BY_EID_SUCCESS:
    case FETCH_USER_EXPERIANCE_FOR_USER_BY_EID_FAILURE:

    case UPDATE_USER_EXPERIANCE_FOR_USER_BY_EID_START:
      return{
        ...state,
        isPutting:true,
      }
    case UPDATE_USER_EXPERIANCE_FOR_USER_BY_EID_SUCCESS:
      return{
        ...state,
        isPutting:false,
        experiences: actions.payload
      }
    case UPDATE_USER_EXPERIANCE_FOR_USER_BY_EID_FAILURE:
      return{
        ...state,
        isPutting:false,
        error: actions.payload
      }

    case DELETE_USER_EXPERIANCE_FOR_USER_BY_EID_START:
      return{
        ...state,
        isDeleting: true
      }
    case DELETE_USER_EXPERIANCE_FOR_USER_BY_EID_SUCCESS:
      return{
        ...state,
        isDeleting: false,
        experiences: actions.payload
      }
    case DELETE_USER_EXPERIANCE_FOR_USER_BY_EID_FAILURE:
      return{
        ...state,
        isDeleting: false,
        error: action.payload
      }

    case FETCH_ALL_COMPANIES_START:
    case FETCH_ALL_COMPANIES_SUCCESS:
    case FETCH_ALL_COMPANIES_FAILURE:

    case FETCH_A_COMPANY_BY_ID_START:
      return{
        ...state,
        isFetching:true
      }
    case FETCH_A_COMPANY_BY_ID_SUCCESS:
      const obj = {...provider, provider:action.payload}
      return{
        ...state,
        userType:2,
        isFetching: false,
        provider:obj
      }
    case FETCH_A_COMPANY_BY_ID_FAILURE:
      return{
        ...state,
        isFetching:false,
        errror: action.provider
      }

    case UPDATE_A_COMPANY_BY_ID_START:
      return{
        ...state,
        isPutting: true
      }
    case UPDATE_A_COMPANY_BY_ID_SUCCESS:
      const obj = {...provider, provider:action.payload}
      return{
        ...state,
        isPutting: false,
        provider:obj
      }
    case UPDATE_A_COMPANY_BY_ID_FAILURE:
      return{
        ...state,
        isPutting: false,
        error: action.provider
      }

    case DELETE_A_COMPANY_BY_ID_START:
      return{
        ...state,
        isDeleting:true
      }
    case DELETE_A_COMPANY_BY_ID_SUCCESS:
      return{
        ...state,
        isDeleting:false,
        state: action.payload
      }
    case DELETE_A_COMPANY_BY_ID_FAILURE:

    case POST_JOB_FOR_COMPANY_START:
    case POST_JOB_FOR_COMPANY_SUCCESS:
    case POST_JOB_FOR_COMPANY_FAILURE:

    case FETCH_JOBS_FOR_COMPANY_START:
    case FETCH_JOBS_FOR_COMPANY_SUCCESS:
    case FETCH_JOBS_FOR_COMPANY_FAILURE:

    case FETCH_JOB_FOR_COMPANY_BY_ID_START:
    case FETCH_JOB_FOR_COMPANY_BY_ID_SUCCESS:
    case FETCH_JOB_FOR_COMPANY_BY_ID_FAILURE:

    case UPDATE_JOB_FOR_COMPANY_BY_ID_START:
    case UPDATE_JOB_FOR_COMPANY_BY_ID_SUCCESS:
    case UPDATE_JOB_FOR_COMPANY_BY_ID_FAILURE:

    case DELETE_JOB_FOR_COMPANY_BY_ID_START:
    case DELETE_JOB_FOR_COMPANY_BY_ID_SUCCESS:
    case DELETE_JOB_FOR_COMPANY_BY_ID_FAILURE:

    case FETCH_JOBS_BY_TYPE_START:
    case FETCH_JOBS_BY_TYPE_SUCCESS:
    case FETCH_JOBS_BY_TYPE_FAILURE:

    case FETCH_MATCH_JP_START:
    case FETCH_MATCH_JP_SUCCESS:
    case FETCH_MATCH_JP_FAILURE:

    case POST_MATCH_START:
    case POST_MATCH_SUCCESS:
    case POST_MATCH_FAILURE:

    case FETCH_MATCHS_JS_START:
      return{
        ...state,
        isFetching:true
      }
    case FETCH_MATCHS_JS_SUCCESS:
      return{
        ...state,
        isFetching: false,
        seeker: {
          ...state.seeker,
          matched_jobs: action.payload
        }
      }
    case FETCH_MATCHS_JS_FAILURE:
      return{
        ...state,
        isFetching: false,
        error: action.payload
      }

    case FETCH_MATCH_JS_START:
    case FETCH_MATCH_JS_SUCCESS:
    case FETCH_MATCH_JS_FAILURE:

    default:
      return state;
  }
}


//export reducer function

export default userReducer;