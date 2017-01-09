import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const SubTopic = (props) => {
	const internals = [
		<div key={0}>{props.topicNum}</div>,
		<div key={1}>{props.name}</div>
	]
	return (
		<div className='SubTopic'>
			{
				props.external
				? <a href={props.path}>{internals}</a>
				: <Link to={props.path}>{internals}</Link> 
			}
		</div>
	)
}

SubTopic.defaultProps = {
	external: false,
	path: '/math',
	topicNum: 'error',
}

SubTopic.propTypes = {
	external: PropTypes.bool.isRequired,
	path: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	topicNum: PropTypes.string.isRequired,
}

export default SubTopic