import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import './styles.scss'
import { BASE_URL } from 'config/constants'
import { signoutUser } from 'redux/modules/users'
import { connect } from 'react-redux'

const NavLink = (props) => (
	<Link {...props} activeClassName='active-nav-link'/>
)

const LeftLinks = ({ admin }) => {
	return (
		<ul>
			<li><IndexLink to={BASE_URL}>Home</IndexLink></li>
			{ admin ? <li><NavLink to={`${BASE_URL}/admin`}>Admin</NavLink></li> : null }
		</ul>
	)
}

const RightLinks = ({ isAuthed, authedId }) => {
	if (isAuthed) {
		if (!authedId) console.warn('Error: No Authed Id')
		return (
			<ul>
				<li><NavLink to={`${BASE_URL}/profile/${authedId}`}>Profile</NavLink></li>
				<li><NavLink to={`${BASE_URL}/signout`}>Logout</NavLink></li>
			</ul>
		)
	} else {
		return (
			<ul>
				<li><NavLink to={`${BASE_URL}/signin`}>Login</NavLink></li>
				<li><NavLink to={`${BASE_URL}/signup`}>Sign Up</NavLink></li>
			</ul>
		)
	}
}

const Navigation = ({ isAuthed, authedId, admin }) => {
	return (
		<nav className='Navigation'>
			<LeftLinks 
				admin={admin}
			/>
			<RightLinks 
				isAuthed={isAuthed}
				authedId={authedId}
			/>
		</nav>
	)
}

Navigation.propTypes = {
	isAuthed: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ users }) => ({
	isAuthed: users.isAuthed,
	authedId: users.authedId,
	admin: users.authedId ? users[users.authedId].admin : false,
})

export default connect(
	mapStateToProps,
)(Navigation)



