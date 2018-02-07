import React, { Component } from 'react';
import axios from 'axios';
import TodoList from './todo_list';
import AddForm from './add_form';
import 'materialize-css/dist/css/materialize.min.css';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=kelceyl4769';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: []
		};

		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.toggleComplete = this.toggleComplete.bind(this);
	}

	componentDidMount() {
		this.getData();
	}

	getData() {
		axios.get(`${BASE_URL}/todos${API_KEY}`).then((resp) => {
			this.setState({
				list: resp.data.todos
			});
		});
	}

	addItem(item) {
		axios.post(`${BASE_URL}/todos${API_KEY}`, item).then((resp) => {
			this.getData();
		});
	}

	deleteItem(id) {
		axios.delete(`${BASE_URL}/todos/${id + API_KEY}`).then((resp) => {
			this.getData();
		});
	}

	toggleComplete(id) {
		axios.put(`${BASE_URL}/todos/${id + API_KEY}`).then((resp) => {
			this.getData();
		});
	}

	render() {
		return (
			<div className="container">
				<h1 className="center-align">To Do App</h1>
				<AddForm add={this.addItem} />
				<TodoList list={this.state.list} delete={this.deleteItem} toggle={this.toggleComplete} />
			</div>
		);
	}
}

export default App;
