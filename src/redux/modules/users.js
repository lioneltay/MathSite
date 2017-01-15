import { registerUser as registerNewUser, signout, signin } from 'helpers/auth'
import { saveUser } from 'helpers/api'
import { formatUserDetails } from 'helpers/format'
import { firebaseAuth } from 'config/constants'
import { fetchUser } from 'helpers/api'

const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
const AUTH_USER = 'AUTH_USER'
const UNAUTH_USER = 'UNAUTH_USER'

const fetchingUser = () => ({
	type: FETCHING_USER,
})

const fetchingUserSuccess = (user) => ({
	type: FETCHING_USER_SUCCESS,
	user,
})

const fetchingUserFailure = (error) => {
	console.error(error)
	return { 
		type: FETCHING_USER_FAILURE,
		error: 'Error Fetching User',
	}
}

const authUser = (uid) =>({
	type: AUTH_USER,
	uid,
})

const unauthUser = () =>({
	type: UNAUTH_USER,
})



// Thunks

/*
	Details come directly from form component, each key value pair is an input on the form
*/
export const registerUser = (details) => (dispatch) => {
	dispatch(fetchingUser())
	
	return registerNewUser(details.email, details.password)
		.then(uid => saveUser(formatUserDetails({ ...details, uid })))
		.then(user => {
			dispatch(fetchingUserSuccess(user))
			dispatch(authUser(user.uid))
		})
		.catch(error => dispatch(fetchingUserFailure(error)))
}

// Keeps the client app's auth state in sync with firebase
export const checkAuth = () => (dispatch) => {
	return firebaseAuth().onAuthStateChanged(user => {
		if (user) {
			const uid = user.uid
			dispatch(fetchingUser())
			
			return fetchUser(user.uid)
				.then(user => {
					dispatch(fetchingUserSuccess(user))
					dispatch(authUser(user.info.uid))
				})
				.catch(error => dispatch(fetchingUserFailure(error)))
		}
	})
}

export const signoutUser = () => (dispatch) => {
	return signout()
		.then(() => dispatch(unauthUser()))
}

export const signinUser = (email, password) => (dispatch) => {
	dispatch(fetchingUser())
	
	return signin(email, password)
		.then(user => {
			dispatch(fetchingUserSuccess(user))
			dispatch(authUser(user.info.uid))
		})
		.catch(error => dispatch(fetchingUserFailure(error)))
}

// Reducers
const initialUsersState = {
	isFetching: false,
	error: '',
	authedId: null,
	isAuthed: false,
}

export default function users(state = initialUsersState, action) {
	switch(action.type) {
		case FETCHING_USER:
			return {
				...state,
				isFetching: true,
				error: '',
			}
		case FETCHING_USER_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: '',
				[action.user.info.uid]: user(state[action.user.info.uid], action),
			}
		case FETCHING_USER_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error,
			}
		case AUTH_USER:
			return {
				...state,
				authedId: action.uid,
				isAuthed: true,
			}
		case UNAUTH_USER:
			return {
				...state,
				authedId: null,
				isAuthed: false,
			}			
		default:
			return state
	}
}

const initialUserState = {
	info: {},
	admin: false,
}

function user(state = initialUserState, action) {
	switch(action.type) {
		case FETCHING_USER_SUCCESS:
			return {
				...state,
				...action.user,
			}
		default:
			return state
	}
}







