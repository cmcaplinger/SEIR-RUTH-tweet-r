import React from 'react';


export default function Tweet(props) {



    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const res = await fetch('https://seir-tweeter-api.herokuapp.com/tweets');//props.match
    //             const data = await res.json()
    //             await setCardInfo(data.filter(tweet => tweet.user_id === userChoice))
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     })()
    // }, [])

    return(
        <div id="tweet-container">
            <h1>Tweet (Show) Page</h1>
        </div>
    )
}