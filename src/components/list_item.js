import React from 'react';

export default (props) => {
	let color = '';

	if (props.complete === true) {
		color = 'light-green lighten-5';
	}

	return (
		<li className="collection-item">
			<div className={`${color} row`}>
				<div className="col s6" onClick={props.toggle}>
					{props.title}
				</div>
				<div className="col s6 right-align">
					<button onClick={props.delete} className="btn btn-floating red">
						<i className="material-icons">delete</i>
					</button>
				</div>
			</div>
		</li>
	);
};
