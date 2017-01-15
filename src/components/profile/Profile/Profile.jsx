import React, { PropTypes, Component } from 'react'
import { ProfileNav } from 'components/profile'

class ProfileContainer extends Component {
	render() {
		return (
			<div>
				<ProfileNav
					params={this.props.params}
				/>
				{this.props.children}
			</div>
		)
	}
}

export default ProfileContainer