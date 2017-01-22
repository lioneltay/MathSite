import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { BASE_URL } from 'config/constants'
import './styles.scss'
import { connect } from 'react-redux'

const AuthedLinks = ({ authedId }) => (
	<section>
		<div><Link to={BASE_URL}>Home</Link></div>
		<div><Link to={`${BASE_URL}/profile/${authedId}`}></Link></div>
		<div><Link to={`${BASE_URL}/signout`}>Logout</Link></div>
	</section>
)

const UnauthedLinks = () => (
	<section>
		<div><Link to={BASE_URL}>Home</Link></div>
		<div><Link to={`${BASE_URL}/signin`}>Login</Link></div>
		<div><Link to={`${BASE_URL}/signup/`}>Register</Link></div>
	</section>
)

const Footer = ({ isAuthed, authedId }) => (
	<div className='Footer'>
		<section className>
			<div><em>Not a terribly interesting site. We also only have GitHub :/.</em></div>
			<div className='social-media-icons'>
				<a href='https://github.com/lioneltay/MathSite'><i className="fa fa-github icon" aria-hidden="true"></i></a>
				<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><i className="fa fa-facebook icon" aria-hidden="true"></i></a>
				<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><i className="fa fa-youtube icon" aria-hidden="true"></i></a>
				<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><i className="fa fa-twitter icon" aria-hidden="true"></i></a>
			</div>
		</section>
		{isAuthed ? <AuthedLinks authedId={authedId} /> :	<UnauthedLinks />}
	</div>
)

Footer.propTypes = {
	isAuthed: PropTypes.bool.isRequired,
	authedId: PropTypes.string,
}

const mapStateToProps = ({ users }) => ({
	isAuthed: users.isAuthed,
	authedId: users.authedId,
})

export default connect(
	mapStateToProps,
)(Footer)