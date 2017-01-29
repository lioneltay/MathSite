import React, { PropTypes, Component } from 'react'
import { Navigation, Footer } from 'components'
import { Main } from 'components'
import { connect } from 'react-redux'
import { checkAuth } from 'redux/modules/users'
import { Spinner } from 'components/spinner'
import './styles.scss'

class MainContainer extends Component {
	componentDidMount() {
		this.props.checkAuth()
	}
	
	componentDidUpdate() {
		// re-route based on auth status
	}
	
	render() {
		if (this.props.isFetching) {
			return (
				<Spinner fullscreen={true} />
			)
		}
		
		return (
			<div className='Main'>
				<header>
					<nav>
						<Navigation />
					</nav>
				</header>
				
				<section className='body'>
					{this.props.children}
				</section>
				
				<footer>
					<Footer />
				</footer>				
			</div>
		)
	}
}

MainContainer.propTypes = {
	isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ users }) => ({
	isFetching: users.isFetching,
})

export default connect(
	mapStateToProps,
	{ checkAuth },
)(MainContainer)