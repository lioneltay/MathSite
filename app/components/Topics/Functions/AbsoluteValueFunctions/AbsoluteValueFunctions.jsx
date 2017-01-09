import React from 'react'
import { Tex, TexMarkup } from 'MathJax'
import { Question, Questions, QuestionDescription, Answer, Part } from 'components/Markup'

const AbsoluteValueFunctions = () => (
	<div className='MathMarkup'>
		<h1>Absolute Value Functions</h1>
		<h2>Questions</h2>
		<Questions>
			<Question>
				<QuestionDescription description='hello $\int_3&4xdx$' />
				<Part />
			</Question>
			<Question>
				<Part />
			</Question>
		</Questions>
	</div>
)

export default AbsoluteValueFunctions