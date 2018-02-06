import React from 'react';
import TodoList from './todo_list';
import 'materialize-css/dist/css/materialize.min.css';

const App = () => (
	<div className="container">
		<h1 className="center-align">To Do App</h1>
		<TodoList />
	</div>
);

export default App;
