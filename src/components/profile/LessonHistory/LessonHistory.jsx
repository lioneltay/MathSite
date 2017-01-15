import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsersLessonHistory } from 'redux/modules/usersLessonHistory'

const Lesson = ({ lesson }) => {
	return (
		<div>
			<div>{lesson.timestamp}</div>
			<div>{lesson.record.text}</div>
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
		this.props.fetchUsersLessonHistory(this.props.params.uid)
			.then((data) => console.log('hi', data))
		console.log('cows', this.props)
	}
	
	render() {
		return (
			<LessonHistory 
				lessonHistory={this.props.lessonHistory}
			/>
		)
	}
}

LessonHistoryContainer.propTypes = {
	lessonHistory: PropTypes.array,
	fetchUsersLessonHistory: PropTypes.func.isRequired,
}

const mapStateToProps = (state, props) => ({
	lessonHistory: state.usersLessonHistory[props.params.uid]
		? state.usersLessonHistory[props.params.uid].history
		: [],
})

export default connect(
	mapStateToProps,
	{ fetchUsersLessonHistory },
)(LessonHistoryContainer)