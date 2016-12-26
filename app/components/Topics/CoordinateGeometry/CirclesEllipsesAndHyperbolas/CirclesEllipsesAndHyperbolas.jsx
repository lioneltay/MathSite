import React from 'react'
import { Tex, TexMarkup } from 'MathJax'
import { Question, Questions, Answer } from 'components/Markup'

const CirclesEllipsesAndHyperbolas = () => (
	<div className='MathMarkup'>
		<h1>Circles, Ellipses and Hyperbolas</h1>
		<section>
			<h2>Circles</h2>
			<p>
				Consider a circle around the origin, it has a constant radius. The distance from a point to the origin is <Tex t='\sqrt{x^2 + y^2}' />. So if our circle has constant radius $r$, then the equation of the circle must be <Tex>{`r = \\sqrt{x^2 + y^2}`}</Tex> or <Tex>{`r^2 = x^2 + y^2`}</Tex>.				
				<img className='hcenter img-responsive' src="/images/CoordinateGeometry/CirclesEllipsesAndHyperbolas/CircleAtOrigin.png" alt="CircleAtOrigin" />
			</p>

			<p>
				The general equation of a circle of radius <Tex>{'r'}</Tex> and center <Tex>{`(a,b)`}</Tex> is then <Tex>{'r^2 = (x-a)^2 + (y-b)^2'}</Tex> as we can simply translate a circle centered at the origin.
			</p>
		</section>
		
		<section>
			<h2>Ellipses</h2>
			<p>
				Let's rewrite our circle equation as <Tex>{`1 = \\frac{x^2}{r^2} + \\frac{y^2}{r^2}`}</Tex>. In this form we can see why the <Tex>{'x'}</Tex> and <Tex>{'y'}</Tex> intercepts are <Tex>{'\\pm r'}</Tex> as when either <Tex>{'x'}</Tex> or <Tex>{'y'}</Tex> are <Tex>{'0'}</Tex>, the other must be <Tex>{'r'}</Tex> in order to equal <Tex>{'1'}</Tex>.
			</p>
			
			<p>
				We also see that <Tex>{'x'}</Tex> and <Tex>{'y'}</Tex> are inversely related as when either <Tex>{'x'}</Tex> or <Tex>{'y'}</Tex> increase the other must decrease, and vice versa, consistent with the shape of a circle. Keeping this in mind, there is no reason that both denominators have to be the same. 
			</p>
			
			<p>
				Consider <Tex>{`1 = \\frac{x^2}{a^2} + \\frac{y^2}{b^2}`}</Tex>. Using the same logic as before, the <Tex>{'x'}</Tex> intercept must be <Tex>{'\\pm a'}</Tex> and the <Tex>{'y'}</Tex> intercept must be <Tex>{'\\pm b'}</Tex>. We also maintain the inverse relation between <Tex>{'x'}</Tex> and <Tex>{'y'}</Tex> so we end up with a 'circle' that may not have the same height as width, ie, an ellipse.
			</p>

			<p>
				The general equation of an ellipse centered at <Tex>{`(h,k)`}</Tex> is then <Tex>{'1 = \\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2}'}</Tex> as we can simply translate an ellipse centered at the origin.
			</p>
		</section>
		
		<section>
			<h2>Hyperbolas</h2>
		</section>
		
		<section>
			<h2>Questions</h2>
			<Questions>
				<Question
					question='Question Tex tand things lots of things including tex compute $\int_0^7 x^2 + \sin(x) dx$'
				>
					<Answer answer='$42$' />
				</Question>
				<Question
					question='Another Question Tex tand things lots of things including tex compute $\int_0^7 x^2 + \sin(x) dx$'
				>
					<Answer answer='42' />
				</Question>
				<Question
					question='Another Question Tex tand things lots of things including tex compute $\int_0^7 x^2 + \sin(x) dx$'
				>
					<Answer answer='42' />
				</Question>
			</Questions>
		</section>
	</div>
)

export default CirclesEllipsesAndHyperbolas