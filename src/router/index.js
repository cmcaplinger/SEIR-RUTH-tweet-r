import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';

const AppRouter = props => {
	const [userChoice, setUserChoice] = useState(1)

	return (
		<Router>
			<header>
			<NavBar routes={routes} />
			</header>
			<Switch>
						{
							routes.map(({ Component, key, path }) => (
								<Route
									key={key}
									path={path}
									component={props => <Component page={key} {...props} userChoice={userChoice} setUserChoice={setUserChoice}/>}
								></Route>
							))
						}
			</Switch>
		</Router>
	);
};

export default AppRouter;