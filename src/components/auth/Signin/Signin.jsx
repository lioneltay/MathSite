import React, { PropTypes, Component } from 'react'
import { signinUser } from 'redux/modules/users'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { BASE_URL } from 'config/constants'

const Login = (props) => {
	let password = ''
	let email = ''
	
	function onSubmit(e) {
		e.preventDefault()
		props.onSubmit(email, password)
	}
	
	return (
		<div className='container'>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label>Email</label>
					<input 
						className='form-control' 
						type="email" 
						onChange={(e) => email = e.target.value}
					/>
				</div>
				<div className='form-group'>
					<label>Password</label>
					<input 
						className='form-control' 
						type="password" 
						onChange={(e) => password = e.target.value}
					/>
				</div>
				<div>
					<button className='btn btn-primary' type="submit">Login</button>
					<button className='btn btn-warning' type="button">Cancel</button>
				</div>
			</form>
		</div>
	)
}

Login.propTypes = {
	onSubmit: PropTypes.func.isRequired,
}

class LoginContainer extends Component {
	onSubmit(email, password) {
		this.props.signinUser(email, password)
			.then(() => browserHistory.push(BASE_URL))
	}
	
	render() {
		return (
			<Login 
				onSubmit={this.onSubmit.bind(this)}
			/>
		)
	}
}

LoginContainer.propTypes = {
	signinUser: PropTypes.func.isRequired,
}

export default connect(
	null,
	{ signinUser },
)(LoginContainer)


