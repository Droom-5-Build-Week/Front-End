//import actions
import{
  GETTING_USER,
  GOT_USER,
  GETTING_USER_FAIL,
  UPDATING_USER,
  UPDATED_USER,
  UPDATING_USER_FAIL,
  DELETING_USER,
  DELETED_USER,
  DELETING_USER_FAIL
} from '../Actions/AppActions'


//set up init. state obj.

const initialState = {
  userInfoGot: false,
  isFetching : false,
  isPutting: false,
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
		jobs: [{
			id: "",
			position_name: "",
			type: "",
			job_bio: "",
			durration: "",
			skills: "",
		}],
		matches: [{
			name: "",
			email: "",
			position_name: "",
			type: "",
		}]
	}
}


const userReducer = (state = initialState, action) => {

  console.log('reducer: action', action, 'state', state)

  switch (action.type) {

    // -------------Getting -----------------------------
    case GETTING_USER:
      console.log('getting user');
      return {...state, isFetching: true}

    case GOT_USER:
      console.log('got user');
      return {
        ...state, 
        userInfoGot: !state.userInfoGot,
        id: action.payload.id, 
        seeker: {
          ...state.seeker,
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          location: action.payload.location
        }
      }

    case GETTING_USER_FAIL:
      console.log('get user failed');
      return state;

      // -------------updating -----------------------------

    case UPDATING_USER:
      console.log('updating user');
      return state;

    case UPDATED_USER:
      console.log('user updated');
      return {
        ...state,
        userInfoGot: !state.userInfoGot,
        seeker: {
          ...state.seeker,
          name: action.payload.name
        }
      }

    case UPDATING_USER_FAIL:
      console.log('updating user fail');
      return state;

      // -------------deleting -----------------------------

    case DELETING_USER:
      console.log('deleteing a user');
      return state;

    case DELETED_USER:
      console.log('user deleted');
      return state;

    case DELETING_USER_FAIL:
      console.log('deleting user fail');
      return state;

    default:
      return state;
  }
}

export default userReducer;