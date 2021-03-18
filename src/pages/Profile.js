import React from 'react';
import { useEffect, useState } from 'react';
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
            <h1>Profile Page</h1> {/*name in 'Profile' */}
            {allUser.map(user => {
                return(
                <button onClick={() => setUserChoice(user.id)}>
                    {user.name}
                </button>
                )
            })}
            <div id="profile-info">
                <img className="avatar"/>
                <h3 className='user-name'>   </h3>
            </div>
            <div>
                {
                    cardInfo.map((card) => {
                        return (
                            <>
                                <Card
                                    username={card.user_id}
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
    )
}