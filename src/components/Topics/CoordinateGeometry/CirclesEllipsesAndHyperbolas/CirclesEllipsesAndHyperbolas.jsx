import React from 'react'
import { Tex as T } from 'MathJax'
import { Question, Description, Part, Note } from 'components/markup/worksheet'
import circleAtOrigin from './CircleAtOrigin.png'

const CirclesEllipsesAndHyperbolas = () => (
	<div className='MathMarkup'>
		<h1>Circles, Ellipses and Hyperbolas</h1>
		<section>
			<h2>Circles</h2>
			<p>
				Consider a circle around the origin, it has a constant radius. The distance from a point to the origin is <T t='\sqrt{x^2 + y^2}' />. So if our circle has constant radius $r$, then the equation of the circle must be <T>{`r = \\sqrt{x^2 + y^2}`}</T> or <T>{`r^2 = x^2 + y^2`}</T>.				
				<img className='hcenter img-responsive' src={circleAtOrigin} alt="CircleAtOrigin" />
			</p>

			<p>
				The general equation of a circle of radius <T>{'r'}</T> and center <T>{`(a,b)`}</T> is then <T>{'r^2 = (x-a)^2 + (y-b)^2'}</T> as we can simply translate a circle centered at the origin.
			</p>
		</section>
		
		<section>
			<h2>Ellipses</h2>
			<p>
				Let's rewrite our circle equation as <T>{`1 = \\frac{x^2}{r^2} + \\frac{y^2}{r^2}`}</T>. In this form we can see why the <T>{'x'}</T> and <T>{'y'}</T> intercepts are <T>{'\\pm r'}</T> as when either <T>{'x'}</T> or <T>{'y'}</T> are <T>{'0'}</T>, the other must be <T>{'r'}</T> in order to equal <T>{'1'}</T>.
			</p>
			
			<p>
				We also see that <T>{'x'}</T> and <T>{'y'}</T> are inversely related as when either <T>{'x'}</T> or <T>{'y'}</T> increase the other must decrease, and vice versa, consistent with the shape of a circle. Keeping this in mind, there is no reason that both denominators have to be the same. 
			</p>
			
			<p>
				Consider <T>{`1 = \\frac{x^2}{a^2} + \\frac{y^2}{b^2}`}</T>. Using the same logic as before, the <T>{'x'}</T> intercept must be <T>{'\\pm a'}</T> and the <T>{'y'}</T> intercept must be <T>{'\\pm b'}</T>. We also maintain the inverse relation between <T>{'x'}</T> and <T>{'y'}</T> so we end up with a 'circle' that may not have the same height as width, ie, an ellipse.
			</p>

			<p>
				The general equation of an ellipse centered at <T>{`(h,k)`}</T> is then <T>{'1 = \\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2}'}</T> as we can simply translate an ellipse centered at the origin.
			</p>
		</section>
		
		<section>
			<h2>Hyperbolas</h2>
		</section>
		
		<section>
		
			<Question partsPerRow={3} number='1'>
				<Description>This is a question without parts</Description>
			</Question>
			
			<Question partsPerRow={3} number='2'>
				<Description>This is a question with parts</Description>
				<Part number='a'><T t='f(x) = \frac{x + 1}{x + 3}'/></Part>
				<Part number='a'><T t='f(x) = \frac{x + 1}{x + 3}'/></Part>
				<Part number='a'><T t='f(x) = \frac{x + 1}{x + 3}'/></Part>
				<Part number='a'><T t='f(x) = \frac{x + 1}{x + 3}'/></Part>
				<Part number='a'><T t='f(x) = \frac{x + 1}{x + 3}'/></Part>
				<Part number='b'>Part b</Part>
				<Part number='c'>Part c</Part>
				<Part number='c'>Part c</Part>
				<Part number='c'>Part c</Part>
				<Part number='c'>Part c</Part>
			</Question>
			
			<Note>
				<div>
					Some Notes <T t='f : (2,\infty) \rightarrow \mathbb{R}, f(x) = \sqrt{2x + 3}'/> and some cows
				</div>
			</Note>
			<Question partsPerRow={4} number='3'>
				<Description>This is a question with parts</Description>
				<Part number='b'>Part b</Part>
				<Part number='a'>
					<div>fgdfgdfgdfg</div>
					<div>cows go moo moo fgdfgdfgdfg dfg df</div>
				</Part>				
				<Part number='c'>Part c</Part>
				<Part number='d'>Part d</Part>
				<Part number='d'>Part d</Part>
				<Part number='d'>Part d</Part>
			</Question>
			
			<Question partsPerRow={3} number='4'>
				<Description>If <T t='f : (2,\infty) \rightarrow \mathbb{R}, f(x) = \sqrt{2x + 3}'/>, then the inverse function is</Description>
				<Part number='a'>fghfghfghfgh fgh fgh fgh gghfghfg fghfgh fgh fg fg a</Part>
				<Part number='b'>Part b</Part>
				<Part number='c'>Part c</Part>
				<Part number='c'>Part c</Part>
				<Part number='c'>Part c</Part>
				<Part number='c'>Part c</Part>
			</Question>
			
			<Question partsPerRow={3} number='5'>
				<Description>This is a question with parts</Description>
				<Part number='a'>Part a</Part>
				<Part number='b'>Part b</Part>
				<Part number='c'>Part c</Part>
			</Question>
			
			<Question partsPerRow={3} number='6'>
				<Description>This is a question with parts</Description>
				<Part number='a'>Part a</Part>
				<Part number='b'>Part b</Part>
				<Part number='c'>Part c</Part>
			</Question>
			
			<div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
		</section>
	</div>
)




export default CirclesEllipsesAndHyperbolas






