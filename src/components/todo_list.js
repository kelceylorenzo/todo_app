import React, { Component } from 'react';
import ListItem from './list_item';

class TodoList extends Component {
	render() {
		const listItems = this.props.list.map((item, index) => {
			return (
				<ListItem
					key={index}
					title={item.title}
					delete={() => {
						this.props.delete(item._id);
					}}
					toggle={() => {
						this.props.toggle(item._id);
					}}
					complete={item.complete}
				/>
			);
		});

		return <ul className="collection">{listItems}</ul>;
	}
}

export default TodoList;
