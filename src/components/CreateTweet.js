import React from 'react'
<<<<<<< HEAD
import {useEffect, useState } from 'react';
=======
import { useState } from 'react'
>>>>>>> origin/react
// we can import a button component here if we like

export default function CreateTweet() {

    const [newTweet, setNewTweet] = useState("")

    const createTweet = (event) => {
        event.preventDefault();


        // tweet schema here, based on the model Rosa wrote on the sketch
        // {
        //     user: "German",
<<<<<<< HEAD
        //     text: "dsfdsfdsfdfd",
        //     mediaImage:       , 
=======
            // text: "dsfdsfdsfdfd",
            // mediaImage:       , 
>>>>>>> origin/react
        //     comments: "sfdfdfdfdfd"
        // }
    }


    
    return (
        <div className="create-tweet">
            <form>
               <div className="create-tweet-input">
                   <img className="avatar"></img>
                   <input onChange={(event) => setNewTweet(event.target.value)} value={newTweet} placeholder="What's happening" type="text">
                   </input>
                </div>  
            </form>

            <button onClick={createTweet} type="submit" className="tweet-button">Tweet</button>
            {/* we can add a <Button/> compenent here if we like */}
            
        </div>
    )
}
