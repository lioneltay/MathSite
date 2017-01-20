import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { BASE_URL } from 'config/constants'
import './styles.scss'

const ProfileNavLink = (props) => (
	<Link {...props} activeClassName='active-profile-nav-link'/>
)

class ProfileNav extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li><ProfileNavLink>Bookmarks</ProfileNavLink></li>
					<li><ProfileNavLink to={`${BASE_URL}/profile/${this.props.params.uid}/lessonhistory`}>Lesson History</ProfileNavLink></li>
					<li><ProfileNavLink>Details</ProfileNavLink></li>
					<li><ProfileNavLink>Results</ProfileNavLink></li>					
				</ul>
			</nav>
		)
	}
}

export default ProfileNav