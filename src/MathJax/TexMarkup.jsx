import React, { PropTypes, Component } from 'react'

class TexMarkup extends Component {
	componentDidMount() {
		MathJax.Hub.Queue(["Typeset",MathJax.Hub])
	}
	
	componentDidUpdate() {
		MathJax.Hub.Queue(["Typeset",MathJax.Hub])
	}
	
	getMarkup() {
		return {
			__html: this.props.children,
		}
	}
	
	render() {
		console.log(this.getMarkup().__html)
		return (
			<span
				dangerouslySetInnerHTML={this.getMarkup()}
			/>
		)
	}
}

export default TexMarkup