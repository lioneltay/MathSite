import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { BASE_URL } from 'config/constants'
import './styles.scss'

const SubTopic = (props) => {
	const internals = [
		props.external
				? <div key={0}><a href={props.path}>{props.topicNum}</a></div>
		: <div key={0}><Link to={props.path}>{props.topicNum}</Link></div>,
		props.external
			? <div key={1}><a href={props.path}>{props.name}</a></div>
			: <div key={1}><Link to={props.path}>{props.name}</Link></div>,		
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