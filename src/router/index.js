import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';


const AppRouter = props => {
	const [userChoice, setUserChoice] = useState(1)
	const [tweets, setTweets] = useState([])
    // const [allUser, setAllUser] = useState([])
    const [users, setUsers] = useState([])

	// If we can figure out how to set tweets user_id = (1,2, whater) to the user api for username we can render the username off mapping the tweets api by setting the user_id to whatever the username is off the user api. 
	useEffect(() => {
        (async () => {
            try {
                const res = await fetch('https://seir-tweeter-api.herokuapp.com/tweets');
                const data = await res.json()
                await setTweets(data)
            } catch (error) {
                console.error(error)
            }
        })()
	}, [])
	
	useEffect(() => {
        (async () => {
            try {
                const res = await fetch('https://seir-tweeter-api.herokuapp.com/users');
                const data = await res.json()
                await setUsers(data)
            } catch (error) {
                console.error(error)
            }
        })()
	}, [])

	
// need to somehow update the API... this mapping and confirming the separate APIs should work but I can't figure out how to POST to the tweets API with an updated user_id value...
	const mapTweetUserIdToUserName = () => {
		// {(tweets.map(tweet => 
		// 	{
		// 		if(tweet.user_id === users.id){
		//
		// 			async (e) => {
		// 				e.preventDefault();
		// 				const body = JSON.stringify({
		// 					tweet:{
		// 						user_id: users.id
		// 					} 
		// 				});
		// 				try {
		// 					const response =  await fetch('https://seir-tweeter-api.herokuapp.com/tweets', {
		// 						method: 'POST',
		// 						headers: {
		// 							'Content-Type': 'application/json'
		// 						},
		// 						body: body
		// 					});
		// 				} catch (error) {
		// 					console.error(error);
		// 				}
		// 			};
		// 		}
		// 	}))}
	}


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