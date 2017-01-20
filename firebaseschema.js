

/users
	[uid]
		info
			name
			lesson Date
			time
			fee


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