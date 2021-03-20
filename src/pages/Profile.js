import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';


export default function Profile(props) {

    const [cardInfo, setCardInfo] = useState([])
    const [allUser, setAllUser] = useState([])
    const [user, setUser] = useState({})
    const [userChoice, setUserChoice] = useState(1)

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`https://seir-tweeter-api.herokuapp.com/users`);//props.match
                const data = await res.json()
                await setAllUser(data)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`https://seir-tweeter-api.herokuapp.com/users/${userChoice}`);//props.match
                const data = await res.json()
                await setUser(data.user)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [userChoice])

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('https://seir-tweeter-api.herokuapp.com/tweets');//props.match
                const data = await res.json()
                await setCardInfo(data.filter(tweet => tweet.user_id === userChoice))
            } catch (error) {
                console.error(error)
            }
        })()
    }, [userChoice])


    return(
        <div id="profile-container">
                <div className="userSwitchButtons">
                    {allUser.map(user => {
                        return(
                        <button onClick={() => setUserChoice(user.id)}>
                            {user.name}
                        </button>
                        )
                    })}
                </div>
            <div id="profile-info">
                <img className="avatar"/>
                <label>Name:<h3 className="user-name">{user.name}</h3></label>
                <label>Username: <h4 className="userName">{user.username}</h4></label>
                <label>Bio: <p className="user-bio">{user.bio}</p></label>
                <label>Followers: <small className="user-followers">{user.followers}</small></label><br />
                <label>Following: <small className="user-following">{user.following}</small></label>
            </div>
            <div className="card-container">
                {
                    cardInfo.map((card) => {
                        return (
                            <>
                                {/* <Card
                                    username={card.user_id}
                                    content={card.content}
                                    timestamp={card.created_at}
                                    likes={card.likes}
                                    retweets={card.retweets}
                                /> */}
                                <div className="Card-Component"> 
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
                                                            <ion-icon name="heart-outline"></ion-icon> {card.likes}         
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
    )
}

// export default ProfilePage = {
//     Profile: Profile,
//     userChoice: userChoice,

// }