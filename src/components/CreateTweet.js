import React from 'react'
import { useRef } from 'react'
// we can import a button component here if we like

export default function CreateTweet() {

    const tweetInput = useRef(null);
    // const mediaImage = useRef(null);


    const createTweet = async (e) => {
        e.preventDefault();

        const tweetValue = tweetInput.current.value
        const body = JSON.stringify({
            tweet:{
                content: tweetValue,
                likes: 0,
                retweets: 0,
                user_id: 2
            } 
        });
        try {
            const response =  await fetch('https://seir-tweeter-api.herokuapp.com/tweets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });
        } catch (error) {
            console.error(error);

        }

        // tweet schema here, based on the model Rosa wrote on the sketch
        // {
        //     user: "German",
            // text: "dsfdsfdsfdfd",
            // mediaImage:       , 
        //     comments: "sfdfdfdfdfd"
        // }
    };


    
    return (
        <div className="create-tweet">
            <form onSubmit={createTweet}>
                <div className="create-tweet-input">
                   {/* <input className="media-image" type="text" ref/> */}
                    <input  type="text" ref={tweetInput}>
                    </input>
                    <input onClick={createTweet} type="submit" className="tweet-button" defaultValue="Tweet"/>
                </div>  
            </form>            
        </div>
    )
}
