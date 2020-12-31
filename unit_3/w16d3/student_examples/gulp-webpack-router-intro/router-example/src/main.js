//react router set up//
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import App from './components/App';
import Test from './components/Test';

const routes = [
	{
		path: '/test',
		name: 'TestPage',
		component: Test
	},
	{
		path: '/',
		name: 'HomePage',
		component: App
	}
];

let hist = createBrowserHistory();
const root = document.getElementById('app'); //optional//

ReactDOM.render(
	<Router history={hist}>
		<Switch>
			{routes.map(route => {
				return (
					<Route
						path={route.path}
						key={route.name}
						component={route.component}
					></Route>
				);
			})}
		</Switch>
	</Router>,
	root
);
