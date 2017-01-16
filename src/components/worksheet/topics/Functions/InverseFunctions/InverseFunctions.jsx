import React from 'react'
import { Tex as T } from 'MathJax'
import { Question, Description, Part, Note } from 'components/markup/worksheet'

const InverseFunctions = () => (
	<div className='MathMarkup'>
		<h1>Inverse Functions</h1>
		
		<h2>Questions</h2>
		
		<Note>
			<div>
				Bali food is gay' and <T t='f(x) = \int_0^{3a}x^2 + \sin(x) dx'/>
			</div>
		</Note>
		
		<Question partsPerRow={2} number={1}>
			<Description>Find the inverse function <T t='f^{-1}'/> of the function:</Description>
			<Part number='a'><T t='f(x) = 2x + 3'/></Part>
			<Part number='b'><T t='f(x) = 4 - 3x'/></Part>
			<Part number='c'><T t='f(x) = 4x + 3'/></Part>
		</Question>
		
		<Question partsPerRow={2} number={1}>
			<Description>Find the inverse function <T t='f^{-1}'/> of the function:</Description>
			<Part number='a'><T t='f(x) = 2x + 3'/></Part>
			<Part number='b'><T t='f(x) = 4 - 3x'/></Part>
			<Part number='c'><T t='f(x) = 4x + 3'/></Part>
		</Question>
		
		<Question partsPerRow={2} number={1}>
			<Description>Find the inverse function <T t='f^{-1}'/> of the function:</Description>
			<Part number='a'><T t='f(x) = 2x + 3'/></Part>
			<Part number='b'><T t='f(x) = 4 - 3x'/></Part>
			<Part number='c'><T t='f(x) = 4x + 3'/></Part>
		</Question>
		
		<Question partsPerRow={2} number={1}>
			<Description>Find the inverse function <T t='f^{-1}'/> of the function:</Description>
			<Part number='a'><T t='f(x) = 2x + 3'/></Part>
			<Part number='b'><T t='f(x) = 4 - 3x'/></Part>
			<Part number='c'><T t='f(x) = 4x + 3'/></Part>
		</Question>
		
	</div>
)

export default InverseFunctions