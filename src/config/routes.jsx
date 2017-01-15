import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { BASE_URL } from 'config/constants'

import { Main, Home } from 'components'

import {
	AbsoluteValueFunctions,
	ReciprocalFunctions,
} from 'components/Topics/Functions'

import { 
	CirclesEllipsesAndHyperbolas,
} from 'components/Topics/CoordinateGeometry'

import { 
	SetNotation,
	SetBuilder,
} from 'components/Topics/Sets'

import {
	Profile,
	LessonHistory,
} from 'components/profile/'

import {
	Signup,
	Signin,
	Signout,
} from 'components/auth'

import {
	Admin,
} from 'components/admin'

const routes = (
	<Router history={browserHistory}>
		<Route path={BASE_URL} component={Main}>
			<IndexRoute component={Home} />
			
			<Route path='admin' component={Admin} />
			
			<Route path='signup' component={Signup} />
			<Route path='signin' component={Signin} />
			<Route path='signout' component={Signout} />
			
			<Route path='profile/:uid' component={Profile}>
				<IndexRoute component={LessonHistory} />
				<Route path='lessonhistory' component={LessonHistory} cows='moo'/>
			</Route>
			
			<Route path='Sets/SetNotation' component={SetNotation} />	
			<Route path='Sets/SetBuilder' component={SetBuilder} />	
			
			<Route path='Functions/AbsoluteValueFunctions' component={AbsoluteValueFunctions} />			
			<Route path='Functions/ReciprocalFunctions' component={ReciprocalFunctions} />		
			
			<Route path='CoordinateGeometry/CirclesEllipsesAndHyperbolas' component={CirclesEllipsesAndHyperbolas} />	
		</Route>
	</Router>
)

export default routes