import React, { PropTypes, Component } from 'react'
import './styles.scss'

class Loading extends Component {	
	constructor(props) {
		super(props)
		this.state = {
			dots: ''
		}
	}
	
	componentDidMount() {
		this.setInterval.call(this)
	}
	
	componentWillUnmount() {
		clearInterval(this.state.id)
	}
	
	setInterval() {
		const id = setInterval(() => {
			console.log('tick')
			if (this.state.dots === '...') {
				this.setState({ dots: '' })
			} else {
				this.setState({ dots: this.state.dots += '.' })
			}
		}, 500)
		this.setState({ id })
	}
	
	render() {
		return (
			<div className='Loading'>Loading{this.state.dots}</div>
		)
	}
}

export default Loading