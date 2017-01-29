import React from 'react'
import { Tex as T } from 'MathJax'
import { Question, Description, Part, Note } from 'components/markup/worksheet'

const InverseFunctions = () => (
	<div className='MathMarkup'>
		<h1>Inverse Functions</h1>
		
		<h2>Questions</h2>
		
		<Note>
			<ul>
				<li>
					A <strong>function</strong> <T t='f(x)'/> has an <strong>inverse function</strong>, <T t='f^{-1}(x)'/>, if and only if it is one-to-one.
				</li>
				<li>
					A function and its inverse are related geometrically by a reflect along the line <T t='y = x'/>
				</li>
				<li>
					As a result, <T t='\text{domain}(f) = \text{range}(f^{-1})'/> and <T t='\text{range}(f) = \text{domain}(f^{-1})'/>
				</li>
			</ul>
		</Note>
		
		<Question partsPerRow={2} number={1}>
			<Description>
				For each of the following <strong>functions</strong> find the inverse <T t='f^{-1}'/> and sketch both <T t='f'/> and <T t='f^{-1}'/>.
				<div>(<em>Contemplate:</em> How does the inverse change when you transform the original function?)</div>
			</Description>
			<Part number='a'><T t='f(x) = x'/></Part>
			<Part number='b'><T t='f(x) = 2x'/></Part>
			<Part number='c'><T t='f(x) = x + 1'/></Part>
			<Part number='c'><T t='f(x) = (x-1)^3 + 2'/></Part>
		</Question>
		
		<Note>
			<p>
				If a function, <T t='f'/>, has an inverse, <T t='f^{-1}'/>, then,
				<ul>
					<li><T t='(f \circ f^{-1})(x) = x'/> for all <T t='x \in \text{domain}(f^{-1})'/></li>
					<li><T t='(f^{-1} \circ f)(x) = x'/> for all <T t='x \in \text{domain}(f)'/></li>
				</ul>
			</p>
		</Note>
		
		<Question partsPerRow={2} number={2}>
			<Description>
				For each of the following <strong>functions</strong> find the inverse <T t='f^{-1}'/>, and sketch both <T t='f'/> and <T t='f^{-1}'/>. Also write down the domain and ranges of each function and its inverse.
			</Description>
			<Part number='a'><T t='f(x) = \sqrt{x}'/></Part>
			<Part number='b'><T t='f: [0, \infty), f(x) = x^2'/></Part>
		</Question>
		
		<Note>
			<p>
				Any graph of a relation may be inverted by a reflection along the line <T t='y = x'/>. If the original relation is not [x]-to-[y] then the inverse will be [y]-to-[x].
			</p>
			<p>
				Some key points to note:
				<ul>
					<li>A one-to-many <strong>function</strong> has a many-to-one inverse <strong>relation</strong></li>
					<li>A many-to-one <strong>relation</strong> has a many-to-one inverse <strong>function</strong></li>
				</ul>
			</p>
		</Note>
		
		<Question partsPerRow={2} number={3}>
			<Description>
				For each of the following <strong>relations</strong> find the inverse <T t='f^{-1}'/>, and sketch both <T t='f'/> and <T t='f^{-1}'/>. Also write down the [x]-to-[y] relationship of each relation and its inverse.
				<div>(<em>Note:</em> Functions are relations.)</div>
			</Description>
			<Part number='a'><T t='f(x) = \sqrt{x}'/></Part>
			<Part number='b'><T t='f(x) = x^2'/></Part>
		</Question>
		
		<Note>
			<p>
				We could find the intersection of a function, <T t='f'/>, and its inverse, <T t='f^{-1}'/> just like we would with any other functions by solving <T t='f(x) = f^{-1}(x)'/>.
			</p>
			<p>
				However, we can use the property that a function and its inverse are related by a reflection along <T t='y = x'/> to see that we only need to solve either <T t='f(x) = x'/> or	<T t='f^{-1}(x) = x'/>.
			</p>
		</Note>
		
		<Question partsPerRow={1} number={4}>
			<Description>
				For each of the following <strong>relations</strong> find the points of intersection with its inverse firstly by solving <T t='f(x) = f^{-1}(x)'/>, then by solving either <T t='f(x) = x'/> or	<T t='f^{-1}(x) = x'/>.
			</Description>
			<Part number='a'><T t='f(x) = 2x + 1'/></Part>
			<Part number='b'>
				<div><T t='f(x) = x^2'/></div>
				<div>(<em>Note:</em> This is a one-to-many function so its inverse is a many-to-one relation. You may want to write the relation as two separate functions when solving <T t='f(x) = f^{-1}(x)'/>.)</div>
			</Part>
		</Question>
		
		<Question partsPerRow={2} number={5}>
			<Description>
				For each of the following <strong>functions</strong> find the points of intersection with its inverse by solving either <T t='f(x) = x'/> or <T t='f^{-1}(x) = x'/>.
			</Description>
			<Part number='a'><T t='f(x) = x^2 + 5x + 4'/></Part>
			<Part number='b'><div><T t='f(x) = \sqrt{x}'/></div></Part>
		</Question>
		
		<h2>Assignment</h2>
		
		<Question partsPerRow={3} number='1'>
			<Description>Determine the [x]-to-[y] relationships of the following relations.</Description>
			<Part><T t='2x+1'/></Part>
			<Part><T t='x^2'/></Part>
			<Part><T t='x^2 + 3x + 7'/></Part>
			<Part><T t='\frac{1}{x}'/></Part>
			<Part><T t='\frac{1}{x^2}'/></Part>
			<Part><T t='\sin(x)'/></Part>
			<Part>
				<div><T t='x^2 + y^2 = 1'/></div>
				<div>(<em>Hint:</em> What is the distance from the origin to a point <T t='(x,y)'/>? Can you graph this relation?)</div>
			</Part>
		</Question>
		
		<Question number='2'>
			<Description>Let <T t='f: [a,\infty) \rightarrow \mathbb{R}, f(x) = x^2 - 6x + 9'/></Description>
			<Part>Find the smallest value of <T t='a'/> such that <T t='f^{-1}(x)'/> exists.</Part>
			<Part>Find <T t='f^{-1}(x)'/>.</Part>
		</Question>
		
		<Question number='3'>
			<Description>
				Let <T t='f(x) = \frac{x + 4}{3x - 1}'/> (<em>Mobius Transform</em>)
			</Description>
			<Part>
				<div>Show that <T t='f \circ f'/> is defined.</div>
				<div><em>Hint:</em> It may help to write <T t='f(x)'/> in the form <T t='f(x) = \frac{1}{a} + \frac{b}{3x - 1}'/>.</div>
			</Part>
			<Part>Find <T t='f \circ f'/>, stating its domain and range.</Part>
			<Part>
				<div>Write down <T t='f^{-1}(x)'/>.</div>
			</Part>
		</Question>
		
		<Question number='4'>
			<Description>Let <T t='f: [2, \infty) \rightarrow \mathbb{R}, f(x) = \sqrt{x - 2}'/></Description>
			<Part>Find <T t='f^{-1}(x)'/>.</Part>
			<Part>Graph <T t='f^{-1}(x)'/>.</Part>
			<Part>Find <T t='h(x) = f^{-1}(f(\frac{x+3}{2}))'/> and state its maximal domain.</Part>
			<Part>Is <T t='f^{-1}(x)'/> odd, even, or neither?</Part>
			<Part>Find <T t='f^{-1}(-f(\frac{x+3}{2}))'/>.</Part>
		</Question>
		
		<h2>Extra</h2>
		
		
		
	</div>
)

export default InverseFunctions