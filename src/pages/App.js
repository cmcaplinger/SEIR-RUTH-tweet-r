import { useEffect, useState } from 'react';
import Card from '../components/Card';
import CreateTweet from '../components/CreateTweet';

export default function App(props) {

  const [tweets, setTweets] = useState([])
  const [user, setUser] = useState({})

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

  return (
    <div className="app-container">
      <div id="main">
        <CreateTweet />
            <h1>App Page</h1>
            <div>
                {
                    tweets.map((card) => {
                        return (
                            <>
                                <Card
                                    id={card._id}
                                    username={'Homie'}
                                    content={card.content}
                                    timestamp={card.created_at}
                                    likes={card.likes}
                                    retweets={card.retweets}
                                />
                            </>
                        )
                    })
                }
            </div>
      </div>  
    </div>
  );
}