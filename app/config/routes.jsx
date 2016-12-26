import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { MainContainer, HomeContainer } from 'containers'
import { 
	CirclesEllipsesAndHyperbolas 
} from 'components/Topics/CoordinateGeometry'

const Cow = () => (
	<div>Moo</div>
)

const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={MainContainer}>
			<IndexRoute component={HomeContainer} />
			<Route path='CoordinateGeometry/CirclesEllipsesAndHyperbolas' component={CirclesEllipsesAndHyperbolas} />
		</Route>
	</Router>
)

export default routes