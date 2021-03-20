import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import CreateTweet from '../components/CreateTweet';
import Like from '../components/Like'

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

<<<<<<< HEAD
    const addToAPI = async () => {
        const body = {
            tweet: {
                likes: specificLike
            }
        }
         try {
            const response = await fetch(`/seir-tweeter-api.herokuapp.com/tweets/${tweetID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        } catch (error) {
            console.error(error);
        }
    };
=======

>>>>>>> f5aa2f1867b41d0c2f8132a314ca5f54de87d63f

return (
    <div className="app-container">
      <div id="main">
        <CreateTweet />
            <div>
                {
                    tweets.map((card) => {
                        return (
                            <>
<<<<<<< HEAD
                                {/* <Link to={`/Tweet/${card.id}`}>
=======
                                <Link to={`/Tweet/${card.id}`} data={card}>
>>>>>>> f5aa2f1867b41d0c2f8132a314ca5f54de87d63f
                                    <Card
                                        id={card._id}
                                        username={'Homie'}  // API doesn't have a username in tweets 
                                        content={card.content}
                                        timestamp={card.created_at}
                                        likes={card.likes}
                                        retweets={card.retweets}
                                    />
                                </Link> */}
                                <div className="Card-Component" key={card.id}> 
                                        <div className="card">
                                            <div className="image-and-content">
                                                {/* <img src="https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png"/> */}
                                                    <div className="content">
                                                    <Link to={`/Tweets/${card.id}`}>
                                                        <div className="top">
                                                            <p className="user-name"></p>
                                                            <p className="handle-name">@coolbob</p>

                                                            <p className="date">{card.created_at}</p>
                                                        </div>
                                                            <p className="tweet">{card.content}</p>
                                                    </Link>
                                                    <div className="actions">
                                                            <ion-icon name="chatbubbles-outline"></ion-icon> {props.comments}
                                                            <ion-icon name="heart-outline" onClick={
                                                                () => {
                                                                    (async () => {
                                                                        let likes = specificLike;
                                                                        try {
                                                                            const res = await fetch(`https://seir-tweeter-api.herokuapp.com/tweets/${card.id}`);
                                                                            const data = await res.json();
                                                                            // likeCount.push(data.tweet.likes);
                                                                            specificLike = data.tweet.likes;
                                                                            tweetID = data.tweet.id;
                                                                            specificLike += 1;
                                                                            // await setLikeCount([...likeCount, specificLike])
                                                                            addToAPI();
                                                                            console.log(specificLike);
                                                                           
                                                                            // console.log(likeCount[likeCount.length - 1])
                                                                        } catch (e) {
                                                                            console.error(e)
                                                                        }
                                                                    })()
                                                                
                                                                    
                                                                }
                                                                

                                                            }></ion-icon> {card.likes}         
                                                    </div>
                                                </div>  
                                            </div>
                                        </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
      </div>  
    </div>
  );
}