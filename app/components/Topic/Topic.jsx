import React, { PropTypes } from 'react'
import { SubTopic } from 'components'

const Topic = ({ name, topicNum, children }) => {
	children = React.Children.toArray(children)
	let key = 0
	const subtopics = children.map((subtopic, index) => (
											<SubTopic 
												{...subtopic.props} 
												key={index}
												topicNum={`${topicNum}.${index}`}
											/>)
										)
	return (
		<div className='Topic'>
			<div className="row">
				<div className="col-sm-2" />
				<div className="col-sm-10">
					<h2>{`${topicNum} - ${name}`}</h2>
				</div>
				<div className="col-sm-0" />
			</div>
			<div className="row">
				<div className="col-sm-3" />
				<div className="col-sm-9">
					<ul>
						{subtopics}
					</ul>
				</div>
				<div className="col-sm-0" />
			</div>
		</div>
	)
}

export default Topic