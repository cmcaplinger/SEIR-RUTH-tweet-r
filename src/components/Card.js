import { useState, useEffect } from 'react';
//import Like and Retweet

export default function Card() {

    const [cardInfo, setCardInfo] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('');
                const data = await res.json()
                await setCardInfo(data)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])

    return (
        <>
            <Link to='show-page'>
                <img class="avatar"/>
                <h3 class='user-name'>{/*cardInfo.username*/}  </h3>
                <p class='tweet'> {/*cardInfo.tweet-text */} </p>
                <p class='time-stamp'> {/*cardInfo.timestamp*/} </p>
            </Link>
            {/* <Like/>
            <Retweet/> */}
        </>
    )
}