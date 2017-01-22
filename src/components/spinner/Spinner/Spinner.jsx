import React, { PropTypes, Component } from 'react'
import './styles.scss'

class Spinner extends Component {
	constructor(props) {
		super(props)
	}
	
	widthType(width) {
		if (width.match(/\d+%/)) return '%'
		if (width.match(/\d+px/)) return 'px'
	}
	
	heightFromWidth() {
		if (this.props.width.match(/\d+px/)) return this.props.width
	}
	
	paddingFromWidth() {
		if (this.props.width.match(/\d+%/)) return this.props.width
	}
	
	fullscreenStyles() {
		
	}
	
	getStyles() {
		if (!this.props.fullscreen) {
			return {
				width: this.props.width, 
				paddingTop: this.paddingFromWidth(),
				height: this.heightFromWidth(),
			}
		}
		
		return {}
	}
	
	getClass() {
		if (this.props.fullscreen) {
			return 'fullscreen-spinner'
		} else {
			return 'spinner'
		}
	}
	
	render() {		
		return (
			<div style={this.getStyles()} className={this.getClass()}></div>
		)
	}
}

Spinner.defaultProps = {
	width: '100%',
}

Spinner.propTypes = {
	width: PropTypes.string,
	fullscreen: PropTypes.bool,
}

export default Spinner


