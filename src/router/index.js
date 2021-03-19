import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';


const AppRouter = props => {
	const [userChoice, setUserChoice] = useState(1)

	// If we can figure out how to set tweets user_id = (1,2, whater) to the user api for username we can render the username off mapping the tweets api by setting the user_id to whatever the username is off the user api. 
	

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