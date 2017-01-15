import React, { PropTypes, Component } from 'react'
import { AdminNav } from 'components/admin'

class AdminContainer extends Component {
	render() {
		return (
			<div>
				<AdminNav
					params={this.props.params}
				/>
				{this.props.children}
			</div>
		)
	}
}

export default AdminContainer