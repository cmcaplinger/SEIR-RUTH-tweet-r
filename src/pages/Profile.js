import React from 'react';
import { useEffect, useState } from 'react';
import Card from '../components/Card';


export default function Profile(props) {

    const [cardInfo, setCardInfo] = useState([])
    const [user, setUser] = useState({})

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('https://seir-tweeter-api.herokuapp.com/users');//props.match
                const data = await res.json()
                await setUser(data)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('https://seir-tweeter-api.herokuapp.com/tweets');//props.match
                const data = await res.json()
                await setCardInfo(data)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])



    return(
        <div id="profile-container">
            <h1>Profile Page</h1> {/*name in 'Profile' */}

            
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
                                    username={'a;kdjns'}
                                    content={'card.content'}
                                    timestamp={'card.timestamp'}
                                />
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}