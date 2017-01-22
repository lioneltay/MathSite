import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsersLessonHistory } from 'redux/modules/usersLessonHistory'
import { Link } from 'react-router'
import { Loading, Spinner } from 'components/spinner'
import './styles.scss'

const Lesson = ({ lesson }) => {
	console.log(JSON.stringify(lesson, null, 2))
	
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
		return `${lesson.title}`
	}
	
	return (
		<div className='Lesson card'>
			<h1>{title(lesson)}</h1>
			<div>
				<h2>Homework - {lesson.homework.completed ? "Complete" : "Incomplete"}</h2>
				<ul>
					{lesson.homework.tasks.map(taskLink)}
				</ul>
			</div>
		</div>
	)
}

Lesson.propTypes = {
	lesson: PropTypes.object.isRequired,
}

const LessonHistory = ({ lessonHistory }) => {
	return (
		<div>
			{lessonHistory.map((lesson, index) => <Lesson key={index} lesson={lesson} />)}
		</div>
	)
}

class LessonHistoryContainer extends Component {
	componentDidMount() {
		this.props.fetchUsersLessonHistory(this.props.uid)
			.then((data) => console.log('hi', data))
		console.log('cows', this.props)
	}
	
	render() {
		if (this.props.isFetching) {
			console.log(Loading)
			return (
				<div className='center-contents-vh bob'>
					<Spinner width='100px' />
				</div>
			)
		}
		
		return (
			<LessonHistory 
				lessonHistory={this.props.lessonHistory}
			/>
		)
	}
}

LessonHistoryContainer.propTypes = {
	uid: PropTypes.string.isRequired,
	lessonHistory: PropTypes.array,
	fetchUsersLessonHistory: PropTypes.func.isRequired,
}

const mapStateToProps = ({ usersLessonHistory }, props) => ({
	isFetching: usersLessonHistory.isFetching,
	uid: props.uid || props.params.uid,
	lessonHistory: usersLessonHistory[props.params.uid]
		? usersLessonHistory[props.params.uid].history
		: [],
})

export default connect(
	mapStateToProps,
	{ fetchUsersLessonHistory },
)(LessonHistoryContainer)