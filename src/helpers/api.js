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

const history = {
	history: {
		1: {
			lessonId: 1,
			timestamp: Date.now(),
			title: 'Nugget City',
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
			lessonId: 2,
			timestamp: Date.now(),
			title: 'Vectors',
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
		},
		3: {
			lessonId: 3,
			timestamp: Date.now(),
			title: 'A Fun Time',
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
						text: 'Climb Mount Everest',
					}
				}
			}
		},
	}
}

export function fetchUsersLessonHistory(uid) {
	return ref.child(`usersLessonHistory/${uid}`).once('value')
		.then(snapshot => snapshot.val())
}

//export function fetchUsersLessonHistory(uid) {
//	ref.child(`usersLessonHistory/${uid}`).set(history)
//		.then((data) => console.log('Done!', data))
//	return new Promise((resolve, reject) => {
//		setTimeout(() => resolve(history), 3000)
//	})
//}

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


