import React, { PropTypes } from 'react'
import { Topic, SubTopic } from 'components'

const Contents = ({ children }) => {
	children = React.Children.toArray(children)
//	const col1 = children
//								.filter((child, index) => index % 2 === 0)
//								.map((topic, index) => (
//									<topic.type 
//										{...topic.props}
//										topicNum={2*index + 1}
//										key={index}
//									/>
//								))
//	const col2 = children
//								.filter((child, index) => index % 2 === 1)
//								.map((topic, index) => (
//									<topic.type 
//										{...topic.props}
//										topicNum={2*(index + 1)}
//										key={index}
//									/>
//								))
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
	return (
		<div className='Contents container-fluid'>
			{rows}
		</div>
	)
}

export default Contents