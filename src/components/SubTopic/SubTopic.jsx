import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { BASE_URL } from 'config/constants'

const SubTopic = (props) => {
	const internals = [
		props.external
				? <div><a href={props.path} key={0}>{props.topicNum}</a></div>
		: <div><Link to={props.path} key={0}>{props.topicNum}</Link></div>,
		props.external
			? <div><a href={props.path} key={1}>{props.name}</a></div>
			: <div><Link to={props.path} key={1}>{props.name}</Link></div>,		
	]
	
	return (
		<div className='SubTopic'>
			{internals}
		</div>
	)
}

SubTopic.defaultProps = {
	external: false,
	path: BASE_URL,
	topicNum: 'error',
}

SubTopic.propTypes = {
	external: PropTypes.bool.isRequired,
	path: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	topicNum: PropTypes.string.isRequired,
}

export default SubTopic