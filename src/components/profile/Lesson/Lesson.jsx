import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import './styles.scss'
import { BASE_URL, PROFILE_URL } from 'config/constants'
import { formatDate } from 'helpers/format'

function taskLink(task, key) {
	let item = task.text

	if (task.link) {
		if (task.link.external) {
			item = <a href={task.link.url}>{task.text}</a>
		} else {
			item = <Link to={task.link.url}>{task.text}</Link>
		}
	}

	return (
		<li key={key}>
			<div>
				{item}
			</div>
		</li>
	)
}

function title(lesson) {
	return `${formatDate(new Date(lesson.timestamp))} - ${lesson.title}`
}





const LessonSnippet = ({ lesson, toggleDetail }) => {
	return (
		<div className='LessonSnippet' onClick={toggleDetail}>
			<h1>{title(lesson)}</h1>
			<div>
				<h2>Homework - {lesson.homework.completed ? "Complete" : "Incomplete"}</h2>
			</div>
		</div>
	)
}

LessonSnippet.propTypes = {
	lesson: PropTypes.object.isRequired,
	toggleDetail: PropTypes.func.isRequired,
}




const LessonDetail = ({ lesson, toggleDetail }) => {
	return (
		<div className='LessonDetail'>
			<h1>{title(lesson)}</h1>
			<div>
				<h2>Homework - {lesson.homework.completed ? "Complete" : "Incomplete"}</h2>
				<ul>
					{lesson.homework.tasks.map(taskLink)}
				</ul>
			</div>
			<div onClick={toggleDetail}>
				less detail
			</div>
		</div>
	)
}

LessonDetail.propTypes = {
	lesson: PropTypes.object.isRequired,
	toggleDetail: PropTypes.func.isRequired,
}








class Lesson extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			detail: this.props.detail,
		}
	}
	
	toggleDetail() {
		this.setState({ detail: !this.state.detail })
	}
	
	render() {
		const lesson = this.props.lesson
		
		console.log(JSON.stringify(lesson, null, 2))
		
		return (
			<div 
				className='Lesson card' >
				{this.state.detail 
					? <LessonDetail 
							lesson={lesson}
							toggleDetail={this.toggleDetail.bind(this)} /> 
					: <LessonSnippet 
							lesson={lesson}
							toggleDetail={this.toggleDetail.bind(this)} />}
			</div>
		)
	}
}

Lesson.defaultProps = {
	detail: false,
}

Lesson.propTypes = {
	lesson: PropTypes.object.isRequired,
	detail: PropTypes.bool.isRequired,
}

export default Lesson







