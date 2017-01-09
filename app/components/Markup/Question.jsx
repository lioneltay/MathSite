import React, { PropTypes, Component } from 'react'
import Answer from './Answer'
import Part from './Part'
import { TexMarkup } from 'MathJax'

const Question = ({ questionNum, children, question }) => {
	children = React.Children.toArray(children)
	const parts = children.filter(child => child.type.name === 'Part')
		.map((part, index) => <Part {...part.props} key={index} partNum={index+1} />)
	const answer = children[children.length - 1].type.name === 'Answer' ? children[children.length -1] : null
	return (
		<div className='Question'>
			<p><span className='question-number'>{`${questionNum}) `}</span><TexMarkup>{question}</TexMarkup></p>
			{parts}
			{answer}
		</div>
	)
}

Question.propTypes = {
}

export default Question