import React, { PropTypes, Component } from 'react'
import Answer from './Answer'
import Part from './Part'
import { TexMarkup } from 'MathJax'

const QuestionDescription = ({ description }) => {
	return (
		<div className='QuestionDescription'>
			<TexMarkup>{description}</TexMarkup>
		</div>
	)
}

QuestionDescription.propTypes = {
	question: PropTypes.string.isRequired,
}

export default QuestionDescription