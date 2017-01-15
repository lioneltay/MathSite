import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { BASE_URL } from 'config/constants'

class ProfileNav extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li><Link>Bookmarks</Link></li>
					<li><Link to={`${BASE_URL}/profile/${this.props.params.uid}/lessonhistory`}>Lesson History</Link></li>
					<li><Link>Details</Link></li>
					<li><Link>Results</Link></li>					
				</ul>
			</nav>
		)
	}
}

export default ProfileNav