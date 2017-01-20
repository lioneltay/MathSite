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

//export function fetchUsersLessonHistory(uid) {
//	return ref.child(`usersLessonHistory/${uid}`).once('value')
//		.then(snapshot => snapshot.val())
//}

const history = {
	history: {
		1: {
			hid: 1,
			timestamp: 0,
			title: 'Lesson 31/12',
			homework: {
				completed: false,
				tasks: {
					1: {
						tid: 1,
						link: true,
						text: 'vectors'
					},
					2: {
						tid: 2,
						link: {
							external: false,
							url: 'http://localhost:8080/math/worksheets/Functions/CompositeFunctions',
						},
						text: 'Composite Functions Worksheet',
					}
				}
			}
		},
		2: {
			hid: 2,
			timestamp: 2,
			title: 'Lesson 27/12',
			homework: {
				completed: true,
				tasks: {
					1: {
						tid: 1,
						link: {
							external: false,
							url: 'http://localhost:8080/math/worksheets/Functions/InverseFunctions',
						},
						text: 'Inverse Functions Worksheet'
					},
					2: {
						tid: 2,
						link: false,
						text: 'where are my nuggets',
					}
				}
			}
		}
	}
}

export function fetchUsersLessonHistory(uid) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(history), 3000)
	})
}

/*
/usersLessonHistory
	[uid]
		history: {
			[hid]
				hid
				timestamp
				title
				notes: {

				}
				homework: {
					completed: true
					tasks: {
						[tid]: {
							tid
							link
							text
						}
					}					
				}
		}
*/


