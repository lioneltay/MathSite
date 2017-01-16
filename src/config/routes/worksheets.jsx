import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { WORKSHEETS_URL } from 'config/constants'

import {
	AbsoluteValueFunctions,
	ReciprocalFunctions,
} from 'components/worksheet/topics/Functions'

import { 
	CirclesEllipsesAndHyperbolas,
} from 'components/worksheet/topics/CoordinateGeometry'

import { 
	SetNotation,
	SetBuilder,
} from 'components/worksheet/topics/Sets'

const worksheetRoutes = (
	<Route path={WORKSHEETS_URL}>
		<Route path='Sets/SetNotation' component={SetNotation} />	
		<Route path='Sets/SetBuilder' component={SetBuilder} />	

		<Route path='Functions/AbsoluteValueFunctions' component={AbsoluteValueFunctions} />			
		<Route path='Functions/ReciprocalFunctions' component={ReciprocalFunctions} />		

		<Route path='CoordinateGeometry/CirclesEllipsesAndHyperbolas' component={CirclesEllipsesAndHyperbolas} />	
	</Route>
)

export default worksheetRoutes