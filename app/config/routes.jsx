import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { MainContainer, HomeContainer } from 'containers'


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

const routes = (
	<Router history={browserHistory}>
		<Route path='/math' component={MainContainer}>
			<IndexRoute component={HomeContainer} />
			
			<Route path='Sets/SetNotation' component={SetNotation} />	
			<Route path='Sets/SetBuilder' component={SetBuilder} />	
			
			<Route path='Functions/AbsoluteValueFunctions' component={AbsoluteValueFunctions} />			
			<Route path='Functions/ReciprocalFunctions' component={ReciprocalFunctions} />		
			
			<Route path='CoordinateGeometry/CirclesEllipsesAndHyperbolas' component={CirclesEllipsesAndHyperbolas} />	
		</Route>
	</Router>
)

export default routes