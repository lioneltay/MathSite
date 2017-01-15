import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { signoutUser } from 'redux/modules/users'

class Signout extends Component {
	componentDidMount() {
		this.props.signoutUser()
	}
	
	render() {
		return (
			<div>
				Succesfully Logged Out. Come back soon!
			</div>
		)
	}
}

Signout.propTypes = {
	signoutUser: PropTypes.func.isRequired,
}

export default connect(
	null,
	{ signoutUser },
)(Signout)