import { userInfo } from 'os';
import React, { useState, useEffect } from 'react';


const Show = props => {
    const [tweets, setTweets] = useState([]);
    const [user, setUser] = useState({})

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('https://seir-tweeter-api.herokuapp.com/tweets');
				const data = await response.json();
				setTweets(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`https://seir-tweeter-api.herokuapp.com/users`);//props.match
                const data = await res.json()
                await setUser(data)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])
	return (
		<div className="showpage">
			
			{tweets.map(tweet => {
				return (
					<div className="twitter" key={tweet} >
                        {user.name}
                        
						{/* <Link to={`/place/${place._id}`}>
							<button className="buttonPlanner">{place.name}</button>
						</Link> */}
						<h2>{tweet.content}</h2>
					</div>
				);
			})}
			{/* <form onSubmit={handleSubmit}></form>
			<button>Update</button> */}
		</div>
	);
};

export default Show;
