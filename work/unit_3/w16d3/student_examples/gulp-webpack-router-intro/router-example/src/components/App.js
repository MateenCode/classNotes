import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Home from './Home.js';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Arthur',
			isCool: true
			isLoggedIn: false,
			email: '',
			password: ''
		};
	}
handleChange = (e) => {
	this.setState({
		[event.target.id]: event.target.value
	})
	
}
	handleLogin = (e) => {
		event.preventDefault();
		axios.post('http://localhost:8001/users/login', {
			email: this.state.email,
			password: this.state.password
		})
		.then(response => {
			// localStorage.token = response.data.token
			localStorage.setItem('token', response.data.token)
			this.setState({
				isLoggedIn: true
			})
		})
		.catch(err => console.error(err))
	}
	render() {
		return (
			<div className="Page-wrapper">
				<h2>
					<Link to="/test">Mae app</Link>
				</h2>
				<Home />

				<form onSubmit={this.handleLogin}>
					<input 
					id="email" 
					type="email"
					onChange={this.handleChange}
					></input>
					<input 
					id="password" 
					type="password"
					onChange={this.handleChange}
					></input>
					<input type='submit' value="login"></input>


				</form>
				{
					this.state.isLoggedIn
					? <h1>We are logged in</h1>
					: <h1>Sorry you didn't log in</h1>
				}
			</div>
		);
	}
}

// const app = document.getElementById('app');

// ReactDOM.render(<App />, app);
