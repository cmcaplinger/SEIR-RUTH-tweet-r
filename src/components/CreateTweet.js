import React from 'react'
import { useState } from 'react'
// we can import a button component here if we like

export default function CreateTweet() {

    const [Tweet, setTweet] = useState("")


    const createTweet = async (newTweet) => {
        // e.preventDefault();
        const body = JSON.stringify({ 
            tweet: {
                content: newTweet.content,
                user_id: 1
                
            }
           


        });
        console.log(newTweet);
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
            <form>
               <div className="create-tweet-input">
                   <img className="avatar"></img>
                   <input onChange={(event) => setTweet(event.target.value, event)} value={Tweet} placeholder="What's happening" type="text">
                   </input>
                </div>  
            </form>

            <button onClick={createTweet} type="submit" className="tweet-button">Tweet</button>
            {/* we can add a <Button/> compenent here if we like */}
            
        </div>
    )
}
