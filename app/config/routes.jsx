import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { MainContainer, HomeContainer } from 'containers'

const Cow = () => (
	<div>Moo</div>
)

const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={MainContainer}>
			<IndexRoute component={HomeContainer} />
			<Route path='cow' component={Cow} />
		</Route>
	</Router>
)

export default routes