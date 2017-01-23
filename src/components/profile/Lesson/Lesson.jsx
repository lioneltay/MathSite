import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import './styles.scss'
import { BASE_URL, PROFILE_URL } from 'config/constants'
import { formatDate } from 'helpers/format'

function title(lesson) {
	return `${formatDate(new Date(lesson.timestamp))} - ${lesson.title}`
}


const LessonLink = ({ link }) => (
	<li>
		{link.external
			? <a href={link.url}>{link.linkText}</a>
			: <Link to={link.url}>{link.linkText}</Link>}
		{` - ${link.description}`} 
	</li>
)


const LessonSnippet = ({ lesson, toggleDetail }) => {
	return (
		<div className='LessonSnippet' onClick={toggleDetail}>
			<h1>{title(lesson)}</h1>
			<h2>Homework - {lesson.homework.completed ? "Complete" : "Incomplete"}</h2>
			<div dangerouslySetInnerHTML={{ __html: lesson.snippet.html }} />
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
				<h2>Notes</h2>
				<div dangerouslySetInnerHTML={{ __html: lesson.notes.html }} />
				<h2>Homework - {lesson.homework.completed ? "Complete" : "Incomplete"}</h2>
				<div dangerouslySetInnerHTML={{ __html: lesson.homework.html }} />
				<h2>Links</h2>
				<ul>{lesson.links.map(link => <LessonLink key={link.linkId} link={link}/>)}</ul>
			</div>
			<div className='less-detail text-right' onClick={toggleDetail}>
				<a>collapse</a>
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







