import React from 'react';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';
import CreateTweet from '../components/CreateTweet';

const AppRouter = props => {


	return (
		<Router>
			<header>
			</header>
			<aside>
				<NavBar routes={routes} />
					<Switch>
						{routes.map(({ Component, key, path }) => (
							<Route
								key={key}
								path={path}
								component={props => <Component page={key} {...props} />}
							></Route>
						))}
					</Switch>
			</aside>
		</Router>
	);
};

export default AppRouter;