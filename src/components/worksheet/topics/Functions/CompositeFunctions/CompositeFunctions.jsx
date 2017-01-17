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
			<br />
			<div>You may imagine an assembly line...</div>
			<div>Wood <T t='\underset{\text{Table Factory}}{\rightarrow}'/> Table <T t='\underset{\text{Table Painter}}{\rightarrow}'/> Painted Table</div>
			<div>Wood <T t='\underset{\text{Wood Chipper}}{\rightarrow}'/> Wood Chips <T t='\underset{\text{Table Painter}}{\rightarrow}'/> ???</div>
		</Note>
		
		<Question partsPerRow={2} number='2'>
			<Description>
				<div>
					Find the domain and range of <T t='f'/> and <T t='g'/> then determine if <T t='f(g(x))'/> or <T t='g(f(x))'/> exist, and if so, find their rules.
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
			<div>If <T t='h(x) = f(g(x))'/> exists then:</div>
			<ul>
				<li>
					<T t='\text{domain}(h) = \text{domain}(g)'/> as any input to <T t='h'/> must be an 'input-able' in <T t='g'/>.
				</li>
				<li>
					<T t='\text{range}(h) \subseteq \text{range}(f)'/> since what comes out of <T t='h'/> is what comes out of <T t='f'/> but with more restrictions since the input <T t='f'/> is restricted to the range of <T t='g'/>.
				</li>
			</ul>
		</Note>
		
		<Question partsPerRow={2} number='3'>
			<Description>
				<div>
					Find <T t='f(g(x))'/> and state its rule, domain and range.
				</div>
				<div>
					(<em>Note:</em> You may reuse answers from the previous question).
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
			Suppose we want to find <T t='h(x) = f(g(x))'/>. If <T t='\text{range}(g) \not\subseteq \text{domain}(f)'/> then we know that <T t='h'/> does not exist. Instead we can create a new function <T t='g^*'/> by restricting the domain of <T t='g'/>, which in turn will restrict the range, such that hopefully <T t='\text{range}(g*) \subseteq \text{domain}(f)'/> so  that <T t='h^*(x) = f(g^*(x))'/> exists instead.
		</Note>
		
		<Question partsPerRow={2} number='4'>
			<Description>
				Attempt to find <T t='h(x) = f(g(x))'/>, if necessary create a new function <T t='g^*'/> by restricting the domain of <T t='g'/> and find <T t='h^*(x) = f(g^*(x))'/> instead. Otherwise, state why <T t='h'/> and <T t='h^*'/> do not exist.
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
		
		<Question partsPerRow={2} number='1'>
			<Description>
				If <T t='f(x) = (x+3)(x-2)'/> and <T t='g(x) = x^2'/> determine whether <T t='f(g(x))'/> and <T t='g(f(x))'/> exist. If they do, find the rule for the composite function and state its domain and range.
			</Description>
		</Question>
		
		<Question number='2'>
			<Description>Let <T t='f(x) = x^2'/> and <T t='g(x) = \sqrt{x}'/>.</Description>
			<Part>Determine if <T t='f(g(x))'/> exists. If so state its rule, domain and range</Part>
			<Part>Determine if <T t='g(f(x))'/> exists. If so state its rule, domain and range</Part>
			<Part>Are <T t='f(g(x))'/> and <T t='g(f(x))'/> equal?</Part>
			<Part>Is it possible to restrict the domain of <T t='f'/> so that <T t='f(g(x))'/> and <T t='g(f(x))'/> equal? If so find a domain restricted function <T t='f^*'/> from <T t='f'/> such that <T t='f^*(g(x)) = g(f^*(x))'/></Part>
		</Question>
		
		<Question number='3'>
			<Description>
				For the functions, <T t='f: \mathbb{R} \rightarrow \mathbb{R}, f(x) = x^2 + 2'/> and <T t='g: [6, \infty) \rightarrow \mathbb{R} ,g(x) = \sqrt{x-6}'/>
			</Description>
			<Part>Show that <T t='f(g(x))'/> exists.</Part>
			<Part>Find the rule of <T t='f(g(x))'/> and state its domain and range.</Part>
			<Part>Show that <T t='g(f(x))'/> does not exist.</Part>
			<Part>Restrict the domain of <T t='f'/> to obtain a function <T t='f^*'/> such that <T t='g(f^*(x))'/> exists.</Part>
			<Part>Find <T t='g(f^*(x))'/> and state its domain and range.</Part>
		</Question>
		
		<Question number='4'>
			<Description>
				If <T t='f: (-\infty, 3] \rightarrow \mathbb{R}, f(x) = x^2 + k'/> and <T t='g: [6, \infty) \rightarrow \mathbb{R} ,g(x) = -\sqrt{x-6} + k'/>, 
			</Description>
			<Part>Find the ranges of <T t='f'/> and <T t='g'/></Part>
			<Part>Find the set of values of <T t='k'/> such that both <T t='f(g(x))'/> and <T t='g(f(x))'/> exist.</Part>
		</Question>
		
	</div>
)

export default CompositeFunctions








