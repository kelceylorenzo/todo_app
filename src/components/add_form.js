import React, { Component } from 'react';

class AddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			details: ''
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.addItem = this.addItem.bind(this);
	}

	handleInputChange(event) {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	}

	addItem(event) {
		event.preventDefault();

		this.props.add(this.state);

		this.setState({
			title: '',
			details: ''
		});
	}

	render() {
		const { title, details } = this.state;

		return (
			<div className="row">
				<form className="col s12">
					<div className="row">
						<div className="input-field col s6">
							<input
								value={title}
								name="title"
								type="text"
								placeholder="Item Title"
								onChange={this.handleInputChange}
							/>
						</div>
						<div className="input-field col s6">
							<input
								value={details}
								name="details"
								type="text"
								placeholder="Item Detail"
								onChange={this.handleInputChange}
							/>
						</div>
						<div className="right-align">
							<button className="btn blue darken-3" onClick={this.addItem}>
								Add Item
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default AddForm;
