import React from 'react'
import { Tex as T } from 'MathJax'
import { Question, Description, Part, Note, Answer } from 'components/markup/worksheet'

const FunctionProperties = () => (
	<div className='MathMarkup'>
		<h1>Function Properties</h1>
		
		<h2>Questions</h2>
		
		<Note>
			<div>
				A function is <strong>one-to-one</strong> if every x-value maps to a different y-value. Equivalently, a function <T t='f'/> is one-to-one if <T t='f(a) = f(b)'/> implies <T t='a = b'/>, for all <T t='a,b \in \text{domain}(f)'/>.
			</div>
		</Note>
		
		<Note>
			<ul>
				<li>A <strong>domain</strong> of a function is a set of valid inputs to the function.</li>
				<li>
					The <strong>maximal/implied domain</strong> of a function is the <strong>largest</strong> set of valid inputs to the function. In other words, all domains are a subset of the maximal/implied domain.
					<ul>
						<li>The maximal/implied domain is itself a domain.</li>
						<li>The name <strong>implied domain</strong> comes from the fact that we use the maximal/implied domain when the domain is not specified.</li>
					</ul>
				</li>
			</ul>
		</Note>
		
		<Note>
			<div>
				Functions which are defined by multiple rules are called <strong>piece-wise functions</strong>, sometimes refered to as <strong>hybrid functions</strong>.
			</div>
		</Note>
		
		<Note>
			<ul>
				<li>
					A function is <strong>even</strong> if <T t='f(x) = f(-x)'/> for all <T t='x \in \text{domain}(f)'/>.
					<ul>
						<li>The function is symmetrical about the y-axis as whether you substitute positive or negative values of the same size you about the same value.</li>
					</ul>
				</li>
				<li>
					A function is <strong>odd</strong> if <T t='f(x) = -f(-x)'/> for all <T t='x \in \text{domain}(f)'/>.
					<ul>
						<li>The function looks the same after a vertical and horizontal reflection.</li>
						<li>Or, the function is almost even, but everything on one side is the negative of the other, hence the extra negative sign.</li>
					</ul>
				</li>
			</ul>
		</Note>
		
		
		<h2>Assignment</h2>
		
	
		
		
		<h2>Extra</h2>
		
		
	</div>
)

export default FunctionProperties








