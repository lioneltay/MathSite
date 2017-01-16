import React, { PropTypes } from 'react'
import { Topic, SubTopic } from 'components/worksheet'

const Contents = ({ children }) => {
	children = React.Children.toArray(children)
	children = children.map((topic, index) => (
							<topic.type 
								{...topic.props}
								topicNum={(index + 1)}
							/>
						))
	
	const rows = children.reduce((rows, topic, index, children) => {
		if (index % 2 === 0) {
			rows.push((
				<div key={index} className='row'>
					<div className='col-sm-6'>
						{children[index]}
					</div>
					<div className='col-sm-6'>
						{children[index + 1]}
					</div>
				</div>
			))
		}
		return rows
	}, [])
	
	// Rendered Component
	return (
		<div className='Contents container-fluid'>
			{rows}
		</div>
	)
}

export default Contents