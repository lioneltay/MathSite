import React from 'react'
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router'
import { BASE_URL } from 'config/constants'

import worksheetRoutes from './worksheets'
import profileRoutes from './profile'

import { Main } from 'components'
// The home page is currently the worksheet page, can easily be changed
import { Home } from 'components/worksheet'

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
			
			{profileRoutes}
			
			{worksheetRoutes}
			
		</Route>
	</Router>
)

export default routes