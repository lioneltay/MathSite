import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { registerUser } from 'redux/modules/users'
import { browserHistory } from 'react-router'
import { BASE_URL } from 'config/constants'

const Signup = (props) => {
	const details = {
		email: '',
		password: '',
		passwordConfirm: '',
	}	
	
	function submit(e) {
		e.preventDefault()
		props.onSubmit(details)
			.then(() => browserHistory.push(BASE_URL))
			.catch(error => console.warn(error))
	}
	
	return (
		<div className='container-fluid'>
			<form onSubmit={submit}>
				<div className='form-group'>
					<label>Email</label>
					<input 
						className='form-control' 
						type="email" 
						onChange={(e) => details.email = e.target.value}
					/>
				</div>
				<div className='form-group'>
					<label>Password</label>
					<input 
						className='form-control' 
						type="password" 
						onChange={(e) => details.password = e.target.value}
					/>
				</div>
				<div className='form-group'>
					<label>Confirm Password</label>
					<input 
						className='form-control' 
						type="password" 
						onChange={(e) => details.passwordConfirm = e.target.value}
					/>
				</div>
				<div>
					<button className='btn btn-primary' type="submit">Register</button>
					<button className='btn btn-warning' type="button">Cancel</button>
				</div>
			</form>
		</div>
	)
}

Signup.propTypes = {
	// Should be asynchronouse and return a promise
	onSubmit: PropTypes.func.isRequired,
}

class SignupContainer extends Component {
	onSubmit(details) {
		return this.props.registerUser(details)
	}
	
	validate() {
		
	}
	
	render() {
		return (
			<Signup
				onSubmit={this.onSubmit.bind(this)}
			/>
		)
	}
}

SignupContainer.propTypes = {
	registerUser: PropTypes.func.isRequired,
}

const mapStateToProps = () => ({
	
})

export default connect(
	mapStateToProps,
	{ registerUser }
)(SignupContainer)



