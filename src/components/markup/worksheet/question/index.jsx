import React, { PropTypes } from 'react'
import './styles.scss'

export function Question({ children, number, partsPerRow }) {
	children = React.Children.toArray(children)
	const description = children.find(child => child.type.name === 'Description')
	const parts = children.filter(child => child.type.name === 'Part')
	const hasParts = parts.length > 0
	
	function partToComp(part, key) {
		const width = Math.floor(12/partsPerRow)
		return (
			<div className={`col-xs-${width} col-sm-${width} col-md-${width} col-lg-${width}`} key={key}>
				<Part {...part.props} />
			</div>
		)
	}
	
	return (
		<div className='container-fluid Question'>
			<div className='row'>
				<div className='col-xs-1'>{number}</div>
				<div className='col-xs-11'>
					{description}
					{ 
						hasParts
						? <div className='row auto-clear'>
							{parts.map(partToComp)}
						</div>
						: null 
					}
				</div>
			</div>
		</div>
	)
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