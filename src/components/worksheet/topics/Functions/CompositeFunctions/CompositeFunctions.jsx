import React from 'react'
import { Tex as T } from 'MathJax'
import { Question, Description, Part, Note } from 'components/markup/worksheet'

const CompositeFunctions = () => (
	<div className='MathMarkup'>
		<h1>Composite Functions</h1>
		
		<h2>Questions</h2>
		
		<Note>
			<div>
				Given two functions <T t='f'/> and <T t='g'/>, the composition <T t='h = f \circ g'/> is defined as <T t='h(x) = f(g(x))'/>
			</div>
			<div><strong>Example:</strong></div>
			<div>If <T t='f(x) = 2x'/>, <T t='g(x) = x^2'/> and <T t='h = f \circ g'/>, then, <T t='h(x) = f(g(x)) = f(x^2) = 2x^2'/></div>
		</Note>
		
		<Question partsPerRow={3} number='1'>
			<Description>Assuming that <T t='h = f \circ g'/> exists, find the rule of <T t='h'/></Description>
			<Part>
				<div><T t='f(x) = 2x + 1'/></div>
				<div><T t='g(x) = 3x'/></div>
			</Part>
			<Part>
				<div><T t='f(x) = 2x - 1'/></div>
				<div><T t='g(x) = x^2 + 1'/></div>
			</Part>
			<Part>
				<div><T t='f(x) = x^2 + 3x'/></div>
				<div><T t='g(x) = 2x + 3'/></div>
			</Part>
		</Question>
		
		<Note>
			<div>Given two functions <T t='f'/> and <T t='g'/>, the composition <T t='h = f \circ g'/> exists if <T t='\text{range}(g) \subseteq \text{domain}(f)'/>.</div>
			<div>This means that what comes out of the inner function (<T t='g'/>) must be a valid input of the outer function.</div>
			<div>You may imagine an assembly line...</div>
			<div>Wood <T t='\underset{\text{Table Factory}}{\rightarrow}'/> Table <T t='\underset{\text{Table Painter}}{\rightarrow}'/> Painted Table</div>
			<div>Wood <T t='\underset{\text{Wood Chipper}}{\rightarrow}'/> Wood Chips <T t='\underset{\text{Table Painter}}{\rightarrow}'/> ???</div>
		</Note>
		
		<Question partsPerRow={2} number='2'>
			<Description>
				<div>
					Find the domain and range of <T t='f'/> and <T t='g'/> to determine if <T t='f(g(x))'/> or <T t='g(f(x))'/> exist, and if so, find their rules.
				</div>
				<div>
					(<em>Note:</em> If a domain is not stated, we use the implied/maximal domain, hence the name).
				</div>
			</Description>
			<Part>
				<div><T t='f(x) = \frac{1}{x^2}'/></div>
				<div><T t='g(x) = x^2 + 1'/></div>
			</Part>
			<Part>
				<div><T t='f(x) = \sqrt{3 - x}'/></div>
				<div><T t='g(x) = x^2'/></div>
			</Part>
		</Question>
		
		<Note>
			Restricting domain of inner function.
		</Note>
		
		<Question partsPerRow={2} number='3'>
			<Description>
				Find <T t='h(x) = f(g(x))'/> restricting domains as necessary. Otherwise, state why <T t='h'/> does not exist.
			</Description>
			<Part>
				<div><T t='f(x) = (x-1)^2'/></div>
				<div><T t='g(x) = \sqrt{9 - x}'/></div>
			</Part>
			<Part>
				<div><T t='f(x) = \sqrt{x - 1}'/></div>
				<div><T t='g(x) = -\left|x\right|'/></div>
			</Part>
			<Part>
				<div><T t='f: (-\infty, 5) \rightarrow \mathbb{R}, f(x) = x'/></div>
				<div><T t='g(x) = x^2 + 1'/></div>
			</Part>
			<Part>
				<div><T t='f: (-\infty, 5) \rightarrow \mathbb{R}, f(x) = x^{774} - sin(x)'/></div>
				<div><T t='g(x) = x^2 + 1'/></div>
				<div>(<em>Hint:</em> refer to previous part, what do you really care about <T t='f'/>?)</div>
			</Part>
		</Question>
		
		
		<h2>Assignment</h2>
		
		<Question partsPerRow={3} number='1'>
			<Description>Find the domain and range of <T t='f'/> and <T t='g'/> to determine if <T t='f(g(x))'/> or <T t='g(f(x))'/> exist and state why.</Description>
			<Part>
				<div><T t='f(x) = x^2'/></div>
				<div><T t='g(x) = \sqrt{6 - x}'/></div>
			</Part>
			<Part>
				<div><T t='f(x) = \sqrt{x + 4}'/></div>
				<div><T t='g(x) = \sqrt{6 - x}'/></div>
			</Part>
			<Part>Part a</Part>
		</Question>
		
	</div>
)

export default CompositeFunctions