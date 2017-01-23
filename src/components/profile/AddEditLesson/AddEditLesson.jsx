import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import './styles.scss'

class AddEditLesson extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			snippet: {},
			notes: {},
			homework: {},
		}
	}
	
	submit(e) {
		e.preventDefault()
		const lesson = {
			...this.state,
			timestamp: Date.now()
		}
		console.log(JSON.stringify(lesson, null, 2))
	}
	
	onHTMLChange(e, name) {
		console.log(this.state)
		this.setState({
			[name]: {
				...this.state[name],
				html: e.target.value,
			}
		})
	}
	
	onCheckboxChange(e) {
		console.log(this.state)
		console.log(e.target.checked)
		this.setState({
			homework: {
				...this.state.homework,
				completed: e.target.checked,
			}
		})
	}
	
	onTitleChange(e) {
		this.setState({
			title: e.target.value,
		})
	}
	
	render() {
		return (
			<form className='AddEditLesson' onSubmit={this.submit.bind(this)} >
				<div className='form-group'>
					<label>Title</label>
					<input onChange={this.onTitleChange.bind(this)} type='text' className='form-control' />
				</div>
				
				<div className='form-group'>
					<label>Snippet</label>
					<textarea onChange={e => this.onHTMLChange.bind(this)(e, 'snippet')} className='form-control'></textarea>
					<div dangerouslySetInnerHTML={{ __html: this.state.snippet.html }} />	
				</div>
				
				<div className='form-group'>
					<label>Notes</label>
					<textarea onChange={e => this.onHTMLChange.bind(this)(e, 'notes')} className='form-control'></textarea>
					<div dangerouslySetInnerHTML={{ __html: this.state.notes.html }} />	
				</div>
				
				<div className='form-group'>
					<label>Homework</label>
					<textarea onChange={e => this.onHTMLChange.bind(this)(e, 'homework')} className='form-control'></textarea>
					<div dangerouslySetInnerHTML={{ __html: this.state.homework.html }} />
					
					<div className="form-check">
						<label className="form-check-label">
							<input onChange={this.onCheckboxChange.bind(this)} className="form-check-input" type="checkbox" />
							Completed
						</label>
					</div>
					
				</div>
				
				<div>
					<label>Links</label>
				</div>
				<button className='btn btn-primary'>Submit</button>
			</form>
		)
	}
}

AddEditLesson.propTypes = {
	uid: PropTypes.string.isRequired, // Users lesson
	lessonId: PropTypes.string, // The lesson id to update, only if editting
}

const mapStateToProps = () => ({
	
})

export default AddEditLesson




