import React, { PropTypes } from 'react'
import { Topic, SubTopic, Contents } from 'components/worksheet'
import { BASE_URL, WORKSHEETS_URL } from 'config/constants'

const Home = () => (
	<div className='Home'>
		<h1>Contents - Worksheets/Notes</h1>
		<Contents>
			<Topic name='Sets'>
				<SubTopic name='Set Notation [TODO]' path={`${BASE_URL}/${WORKSHEETS_URL}/Sets/SetNotation`}/>
				<SubTopic name='Set Builder Notation [TODO]' path={`${BASE_URL}/${WORKSHEETS_URL}/Sets/SetBuilder`}/>
			</Topic>
			
			<Topic name='Functions'>
				<SubTopic name='Absolute Value Functions [TODO]' path={`${BASE_URL}/${WORKSHEETS_URL}/Functions/AbsoluteValueFunctions`}/>
				<SubTopic name='Reciprocal Functions [TODO]' path={`${BASE_URL}/${WORKSHEETS_URL}/Functions/ReciprocalFunctions`}/>
				<SubTopic name='Inverse Functions [TODO]' path={`${BASE_URL}/${WORKSHEETS_URL}/Functions/InverseFunctions`}/>
				<SubTopic name='Composite Functions [TODO]' path={`${BASE_URL}/${WORKSHEETS_URL}/Functions/CompositeFunctions`}/>
			</Topic>
			
			<Topic name='Coordinate Geometry'>
				<SubTopic name='Circles, Ellipses and Hyperbolas [TODO]' path={`${BASE_URL}/${WORKSHEETS_URL}/CoordinateGeometry/CirclesEllipsesAndHyperbolas`}/>
			</Topic>
			
			<Topic name='Trigonometry and Circular Functions'></Topic>
			
			<Topic name='Vectors'></Topic>
			<Topic name='Complex Numbers'></Topic>
			
			<Topic name='Kinematics'></Topic>
			<Topic name='Differential Calculus'></Topic>
			<Topic name='Integral Calculus [OLD NOTES]'>
				<SubTopic name='Introduction and Notation' path={'https://www.overleaf.com/read/mjkcdjwnvwvb'} external={true} />
				<SubTopic name='Substitution' path={'https://www.overleaf.com/read/mjkcdjwnvwvb'} external={true} />
				<SubTopic name='Integration by Parts' path={'https://www.overleaf.com/read/mjkcdjwnvwvb'} external={true} />
				<SubTopic name='Reverse Quotient Rule. No!' path={'https://www.overleaf.com/read/mjkcdjwnvwvb'} external={true} />
				<SubTopic name='Using Trigonometric Identities' path={'https://www.overleaf.com/read/mjkcdjwnvwvb'} external={true} />
				<SubTopic name='Partial Fractions' path={'https://www.overleaf.com/read/mjkcdjwnvwvb'} external={true} />
				<SubTopic name='Areas Under Curves' path={'https://www.overleaf.com/read/mjkcdjwnvwvb'} external={true} />
				<SubTopic name='Areas Between Curves' path={'https://www.overleaf.com/read/mjkcdjwnvwvb'} external={true} />
				<SubTopic name='Volumes of Solids of Revolutions' path={'https://www.overleaf.com/read/mjkcdjwnvwvb'} external={true} />
				<SubTopic name='Area Approximation, Introduction to Rieman Integration' path={'https://www.overleaf.com/read/mjkcdjwnvwvb'} external={true} />
			</Topic>
			<Topic name='Differential Equations'></Topic>			
			<Topic name='Mechanics'></Topic>
			<Topic name='Vector Calculus'></Topic>
			
			
			<Topic name='Probability'></Topic>
			<Topic name='Statistics'></Topic>
			
			
		</Contents>
	</div>
)

export default Home
