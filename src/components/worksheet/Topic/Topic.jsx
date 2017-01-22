import React, { PropTypes } from 'react'
import { SubTopic } from 'components/worksheet'
import './styles.scss'

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
					<h2>
						<div className='number'>{`${topicNum}`}</div>
						<div className='name'>{`${name}`}</div>
					</h2>
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