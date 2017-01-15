function valOrNull(val) {
	return val ? val : null
}

/*
	Takes details from form single layer key-value pairs and formats into a user object
*/
export function formatUserDetails(details) {
	return {
		info: {
			uid: valOrNull(details.uid),
			name: valOrNull(details.name),
			email: valOrNull(details.email),
		}
	}
}