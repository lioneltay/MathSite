

/users
	[uid]
		info
			name
			lesson Date
			time
			fee


/usersLessonHistory
	[uid]
		[hid]
			hid
			timestamp
			record
				Text
				notes
				homework


/usersCompletedWorksheets
	[uid]
		[wid]: true
		
		
/usersBookmarks
	[uid]
		[itemID]: true


/usersResults:
	[uid]
		[tid]
			timestamp
			result 
				score
				topic 


/usersQuestions
	[uid]
		[qid]
			timestamp
			question 
				Text
				image
				question number
				book