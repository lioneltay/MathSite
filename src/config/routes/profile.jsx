import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'
import { PROFILE_URL } from 'config/constants'

import {
	Profile,
	LessonHistory,
} from 'components/profile/'

const profileRoutes = (
	<Route path='profile/:uid' component={Profile}>
		<IndexRedirect to='lessonhistory' />
		<Route path='lessonhistory' component={LessonHistory}/>		
	</Route>
)

export default profileRoutes