import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsersLessonHistory } from 'redux/modules/usersLessonHistory'
import { Link } from 'react-router'
import { Loading, Spinner } from 'components/spinner'
import { Lesson, AddEditLesson } from 'components/profile'

const LessonHistory = ({ lessonHistory, uid }) => {
	return (
		<div>
			{lessonHistory.map((lesson, index) => <Lesson key={index} uid={uid} lesson={lesson} />)}
		</div>
	)
}

class LessonHistoryContainer extends Component {
	componentDidMount() {
		this.props.fetchUsersLessonHistory(this.props.uid)
	}
	
	render() {
		if (this.props.isFetching) {
			return (
				<div className='center-contents-vh bob'>
					<Spinner width='100px' />
				</div>
			)
		}
		
		return (
			<div>
				<LessonHistory 
					lessonHistory={this.props.lessonHistory}
				/>
				<AddEditLesson />
			</div>
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