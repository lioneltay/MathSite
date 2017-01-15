import { fetchUsersLessonHistory as apiFetchUsersLessonHistory } from 'helpers/api'

const FETCHING_USERS_LESSON_HISTORY = 'FETCHING_USERS_LESSON_HISTORY'
const FETCHING_USERS_LESSON_HISTORY_SUCCESS = 'FETCHING_USERS_LESSON_HISTORY_SUCCESS'
const FETCHING_USERS_LESSON_HISTORY_FAILURE = 'FETCHING_USERS_LESSON_HISTORY_FAILURE'

const fetchingUsersLessonHistory= () => ({
	type: FETCHING_USERS_LESSON_HISTORY,
})

const fetchingUsersLessonHistorySuccess = (uid, lessonHistory) => ({
	type: FETCHING_USERS_LESSON_HISTORY_SUCCESS,
	lessonHistory,
	uid,
})

const fetchingUsersLessonHistoryFailure = (error) => {
	console.error(error)
	return {
		type: FETCHING_USERS_LESSON_HISTORY_FAILURE,
	}	
}

// THUNKS
//TODO MOVE THIS SOMEWHERE? UTIL FUNCTION
function lessonHistoryArray(obj) {
	return Object.keys(obj)
		.sort((a,b) => obj[b].timestamp - obj[a].timestamp)
		.map(key => obj[key])
}

export const fetchUsersLessonHistory = (uid) => (dispatch) => {
	dispatch(fetchingUsersLessonHistory())
	
	return apiFetchUsersLessonHistory(uid)
		.then(lessonHistory => lessonHistoryArray(lessonHistory))
		.then(historyArray => dispatch(fetchingUsersLessonHistorySuccess(uid, historyArray)))
		.catch(error => dispatch(fetchingUsersLessonHistoryFailure(error)))
}



// REDUCERS
const initialUsersLessonHistoryState = {
	isFetching: false,
	error: '',
}

export default function usersLessonHistory(state = initialUsersLessonHistoryState, action) {
	switch(action.type) {
		case FETCHING_USERS_LESSON_HISTORY:
			return {
				...state,
				isFetching: true,
				error: '',
			}		
		case FETCHING_USERS_LESSON_HISTORY_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error,
			}
		case FETCHING_USERS_LESSON_HISTORY_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: '',
				[action.uid]: lessonHistory(state[action.uid], action),
			}
		default:
			return state
	}
}

const initialLessonHistoryState = {
	history: {},
}

function lessonHistory(state = initialLessonHistoryState, action) {
	switch(action.type) {
		case FETCHING_USERS_LESSON_HISTORY_SUCCESS:
			return {
				...state,
				history: action.lessonHistory,
			}
		default:
			return state
	}
}








