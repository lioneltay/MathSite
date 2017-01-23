import React from 'react'
import { Route } from 'react-router'
import { WORKSHEETS_URL } from 'config/constants'

import {
	AbsoluteValueFunctions,
	ReciprocalFunctions,
	CompositeFunctions,
	InverseFunctions,
	PowerFunctions,
	FunctionProperties,
} from 'components/worksheet/topics/Functions'

import {
	TypesOfTransformations,
	Transformations,
	TransformationsMatrix,	
} from 'components/worksheet/topics/Transformations'

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
		<Route path='Functions/CompositeFunctions' component={CompositeFunctions} />
		<Route path='Functions/InverseFunctions' component={InverseFunctions} />
		<Route path='Functions/PowerFunctions' component={PowerFunctions} />
		<Route path='Functions/FunctionProperties' component={FunctionProperties} />
		
		<Route path='Functions/TypesOfTransformations' component={TypesOfTransformations} />
		<Route path='Functions/Transformations' component={Transformations} />
		<Route path='Functions/TransformationsMatrix' component={TransformationsMatrix} />

		<Route path='CoordinateGeometry/CirclesEllipsesAndHyperbolas' component={CirclesEllipsesAndHyperbolas} />	
	</Route>
)

export default worksheetRoutes