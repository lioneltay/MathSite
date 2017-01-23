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
function formatUsersLessonHistory(data) {
	const formattedHistory = {
		...data,
	}
		
	formattedHistory.history = Object.keys(data.history)
		.sort((a,b) => data.history[b].timestamp - data.history[a].timestamp)
		.map(key => formatLessonData(data.history[key]))
		
	return formattedHistory
}

function formatLessonData(lessonData) {
	return {
		...lessonData,
		links: formatLinks(lessonData.links),
	}
}
	
function formatLinks(links) {
	return Object.keys(links).map(key => formatLink(links[key]))
}

function formatLink(link) {
	return link
}

export const fetchUsersLessonHistory = (uid) => (dispatch) => {
	dispatch(fetchingUsersLessonHistory())
	
	return apiFetchUsersLessonHistory(uid)
		.then(lessonHistory => formatUsersLessonHistory(lessonHistory))
		.then(formattedHistory => dispatch(fetchingUsersLessonHistorySuccess(uid, formattedHistory)))
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
				[action.uid]: action.lessonHistory,
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
		default:
			return state
	}
}








