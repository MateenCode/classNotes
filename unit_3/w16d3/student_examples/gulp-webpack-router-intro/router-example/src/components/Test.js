import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Test extends Component {
	componentDidMount() {
		if (window.localStorage.getItem('token')) {
			console.log('life is good');
		} else {
			window.location.assign('/');
		}
	}
	render() {
		return (
			<h1>
				This is the other page
				<Link to="/">Go Back To First</Link>
			</h1>
		);
	}
}
