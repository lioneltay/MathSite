import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import './styles.scss'
import { BASE_URL } from 'config/constants'
import { signoutUser } from 'redux/modules/users'
import { connect } from 'react-redux'

const LeftLinks = ({ admin }) => {
	return (
		<ul>
			<li><Link to={BASE_URL}>Home</Link></li>
			{ admin ? <li><Link to={`${BASE_URL}/admin`}>ADMIN</Link></li> : null }
		</ul>
	)
}

const RightLinks = ({ isAuthed, authedId }) => {
	if (isAuthed) {
		if (!authedId) console.warn('Error: No Authed Id')
		return (
			<ul>
				<li><Link to={`${BASE_URL}/profile/${authedId}`}>Profile</Link></li>
				<li><Link to={`${BASE_URL}/signout`}>Logout</Link></li>
			</ul>
		)
	} else {
		return (
			<ul>
				<li><Link to={`${BASE_URL}/signin`}>Login</Link></li>
				<li><Link to={`${BASE_URL}/signup`}>Sign Up</Link></li>
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



