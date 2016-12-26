import React, { PropTypes, Component } from 'react'

class Tex extends Component {
	componentDidMount() {
		MathJax.Hub.Queue(["Typeset",MathJax.Hub])
	}
	
	componentDidUpdate() {
		MathJax.Hub.Queue(["Typeset",MathJax.Hub])
	}
	
	getMarkup() {
		if (this.props.t) {
			return {
				__html: `$${this.props.t}$`,
			}
		}
		
		return {
			__html: `$${this.props.children}$`,
		}
	}
	
	render() {
		return (
			<span
				dangerouslySetInnerHTML={this.getMarkup()}
			/>
		)
	}
}

export default Tex