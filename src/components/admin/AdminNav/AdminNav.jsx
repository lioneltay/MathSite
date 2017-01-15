import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { BASE_URL } from 'config/constants'

class AdminNav extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li><Link>ADMIN</Link></li>
					<li><Link>Lesson History</Link></li>
					<li><Link>Details</Link></li>
					<li><Link>Results</Link></li>					
				</ul>
			</nav>
		)
	}
}

export default AdminNav