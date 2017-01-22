import React, { PropTypes, Component } from 'react'
import { Navigation } from 'components'
import { Main } from 'components'
import { connect } from 'react-redux'
import { checkAuth } from 'redux/modules/users'
import './styles.scss'

class MainContainer extends Component {
	componentDidMount() {
		this.props.checkAuth()
	}
	
	componentDidUpdate() {
		// re-route based on auth status
	}
	
	render() {
		return (
			<div className='Main'>
				<Navigation />
				{this.props.children}
			</div>
		)
	}
}

MainContainer.propTypes = {
	isAuthed: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
	isAuthed: state.users.isAuthed,
	authedId: state.users.authedId,
})

export default connect(
	mapStateToProps,
	{ checkAuth },
)(MainContainer)