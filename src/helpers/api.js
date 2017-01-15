import { ref } from 'config/constants'

// USER

// Saves user to database
// User should be the full user details
// User already has a uid from the register
export function saveUser(user) {
	return ref.child(`users/${user.info.uid}`).set(user)
		// return promise resolved with user for chaining
		.then(() => user)
}

export function fetchUser(uid) {
	return ref.child(`users/${uid}`).once('value')
		.then(snapshot => snapshot.val())
}


// LESSON HISTORY

export function fetchUsersLessonHistory(uid) {
	return ref.child(`usersLessonHistory/${uid}`).once('value')
		.then(snapshot => snapshot.val())
}