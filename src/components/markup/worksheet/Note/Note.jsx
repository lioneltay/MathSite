import React, { PropTypes } from 'react'
import './styles.scss'

const Note = ({ children }) => (
	<div className='Note'>
		{children}
	</div>
)

export default Note