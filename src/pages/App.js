import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import CreateTweet from '../components/CreateTweet';
import NavBar from '../components/NavBar';

export default function App(props) {

  const [tweets, setTweets] = useState([])
  const [user, setUser] = useState({})

//   const [likeCount, setLikeCount] = useState([]);
//   const [specificLike, setSpecificLike] = useState(null);
//   const [userID, setUserID] = useState(null);
    let specificLike;
    let tweetID;

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
                const res = await fetch(`https://seir-tweeter-api.herokuapp.com/users`);
                const data = await res.json()
                await setUser(data)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])


return (
    <div className="app-container">
      <div id="main">
        <CreateTweet />
            <div>
                {
                    tweets.map((card) => {
                        return (
                            <>
                                <Link to={`/Tweet/${card.id}`} data={card}>
                                    <Card
                                        id={card._id}
                                        username={'Homie'}  // API doesn't have a username in tweets 
                                        content={card.content}
                                        timestamp={card.created_at}
                                        likes={card.likes}
                                        retweets={card.retweets}
                                    />
                                </Link> 
                                
                            </>
                        )
                    }).reverse()
                }
            </div>
      </div> 
    </div>
  );
}
