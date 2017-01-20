import React, { PropTypes, Component } from 'react'
import './styles.scss'

export function Question({ children, number, partsPerRow }) {	
	children = React.Children.toArray(children)
	const description = children.find(child => child.type.name === 'Description')
	const answer = children.find(child => child.type.name === 'Answer')
	const parts = children.filter(child => child.type.name === 'Part')
	const hasParts = parts.length > 0
	
	function partToComp(part, index, width) {
		// indices should begin at 0 and be sequential
		return (
			<div className={`col-xs-${width} col-sm-${width} col-md-${width} col-lg-${width}`} key={index}>
				<Part {...part.props} number={String.fromCharCode(97 + index)} />
			</div>
		)
	}
	
	function partsToCols(parts, partsPerRow) {
		if (typeof partsPerRow === 'number') {
			let width = Math.floor(12/partsPerRow)
			return parts.map((part, index) => partToComp(part, index, width))
		}
		
		// Else partsPerRow is an array
		if (partsPerRow.reduce((a,v) => a + v, 0) !== parts.length) {
			console.warn('partsPerRow do not match number of parts')
			throw new Error('partsPerRow do not match number of parts')
		}
		
		let partComponents = []
		let key = 0
		
		partsPerRow.forEach(num => {
			for (let i = num; i > 0; i--) {
				let width = Math.floor(12/num)
				partComponents.push(partToComp(parts.shift(), key++, width))
			}
		})		
		
		return partComponents
	}
	
	return (
		<div>
			<div className='container-fluid Question'>
				<div className='row'>
					<div className='col-xs-1'>{number}</div>
					<div className='col-xs-11'>
						{description}
						{ 
							hasParts
							? <div className='row auto-clear'>
								{partsToCols(parts, partsPerRow)}
							</div>
							: null 
						}

					</div>
				</div>
			</div>
			{answer}
		</div>
	)
}

Question.defaultProps = {
	partsPerRow: 1,
}

export function Description({ children }) {
	return (
		<div className='row Description'>{
			<div className='col-xs-12'>{children}</div>}
		</div>
	)
}

export function Part({ children, number }) {
	return (
		<div className='row Part'>
			<div className='col-xs-1'>{number}</div>
			<div className='col-xs-11'>{children}</div>
		</div>
	)
}

Part.propTypes = {
	number: PropTypes.string,
}

// { show, children, number, partsPerRow  }
export class Answer extends Component {
	constructor(props) {
		super(props)
		
		this.state = { 
			reveal: true,
			bottomButton: false,
		}
	}
	
	displayBottomButton() {
		if (!this.state.bottomButton && this.refs.answer && this.refs.answer.clientHeight > 500) {
			this.setState({ bottomButton: true })
		}
	}
	
	componentDidMount() {
		this.displayBottomButton()
	}
	
	componentDidUpdate() {
		this.displayBottomButton()
	}
	
	toggleReveal() {
		this.setState({ reveal: !this.state.reveal })
	}
	
	toggleButton(text, ...classNames) {
		return (
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-xs-12 text-right'>
						<span className={classNames.join(' ')} onClick={this.toggleReveal.bind(this)}>
							{text}
						</span>
					</div>
				</div>
			</div>
		)
	}
	
	render() {
		if (!this.props.show) return null
		
		return (
			<div>
				<div style={{display: this.state.reveal ? null : 'none'}} ref='answer' className='Answer'>
					{this.toggleButton('Hide Answers', 'toggle-answer-top')}
					<Question number={this.props.number} partsPerRow={this.props.partsPerRow}>
						{this.props.children}
					</Question>
					{this.state.bottomButton
						? this.toggleButton('Hide Answers', 'toggle-answer-bottom')
						: null}
				</div>
				<div style={{display: this.state.reveal ? 'none' : null}}>
					{this.toggleButton('Show Answers', 'toggle-answer')}
				</div>
			</div>
		)
	}
	
}

Answer.defaultProps = {
	partsPerRow: 1,
}


/*
	<h2>Questions</h2>
	<div className='container-fluid question'>
		<div className='row'>
			<div className='col-xs-1'>1</div>
			<div className='col-xs-11'>This is a question with NO parts</div>
		</div>
	</div>

	<div className='container-fluid question'>
		<div className='row'>
			<div className='col-xs-1'>1</div>
			<div className='col-xs-11'>
				<div className='row'>
					<div className='col-xs-12'>This is a question with parts</div>
				</div>
				<div className='row'>
					<div className='col-xs-4'>
						<div className='row x'>
							<div className='col-xs-1 y'>a)</div>
							<div className='col-xs-11 x'>Part a</div>
						</div>
					</div>
					<div className='col-xs-4'>
						<div className='row x'>
							<div className='col-xs-1 y'>a)</div>
							<div className='col-xs-11 x'>Part a</div>
						</div>
					</div>
					<div className='col-xs-4'>
						<div className='row x'>
							<div className='col-xs-1 y'>a)</div>
							<div className='col-xs-11 x'>Part a</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
*/