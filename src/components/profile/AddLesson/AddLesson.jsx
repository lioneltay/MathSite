import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

const AddLesson = ({ lesson }) => {
	return (
		<div>
			A Form to add a new lesson! Only for admins!
		</div>
	)
}

AddLesson.propTypes = {
	
}

const mapStateToProps = () => ({
	
})

export default AddLesson




