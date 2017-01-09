import React from 'react'
import Question from './Question'

const Questions = ({ children }) => {
	children = React.Children.toArray(children)
	
	const questions = children.map((question, index) => (
		<Question {...question.props} questionNum={index + 1} key={index} />
	))
	
	return (
		<div className='Questions'>
			{questions}
		</div>
	)
}

export default Questions