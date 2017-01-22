import React, { PropTypes, Component } from 'react'
import { ProfileNav } from 'components/profile'
import './styles.scss'

class ProfileContainer extends Component {
	render() {
		return (
			<div className='cow'>
				<ProfileNav
					params={this.props.params}
				/>
				{this.props.children}
			</div>
		)
	}
}

export default ProfileContainer