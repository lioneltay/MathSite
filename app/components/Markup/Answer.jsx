import React, { PropTypes, Component } from 'react'
import { TexMarkup } from 'MathJax'

class Answer extends Component {
	constructor(props) {
		super(props)
		
		this.state = { show: false }
	}
	
	render() {
		return (
			<div>
				<div 
					className='show-answer'
					onClick={() => this.setState.bind(this)({ show: !this.state.show })}
				>
					{this.state.showAnswer ? '-' : '+'}
				</div>
				{this.state.show
					? <p><TexMarkup>{this.props.answer}</TexMarkup></p>
					: null }
			</div>			
		)
	}
}

export default Answer