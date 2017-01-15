

/users
	authedId
	isAuthed
	isFetching
	error
	[uid]
		lastupdated
		admin: false,
		info
			name
			lesson Date
			time
			fee


/usersLessonHistory
	isFetching
	error
	[uid]
		history: [
			{
				hid
				timestamp
				record
					Title
					Text
					notes
					homework
			}
		]

/usersCompletedWorksheets
	isFetching
	error
	[uid]
		[wid]: true
		
		
/usersBookmarks
	isFetching
	error
	[uid]
		[itemID]: true


/usersResults:
	isFetching
	error
	[uid]
		[tid]
			timestamp
			result 
				score
				topic 


/usersQuestions
	isFetching
	error
	[uid]
		[qid]
			timestamp
			question 
				Text
				image
				question number
				book