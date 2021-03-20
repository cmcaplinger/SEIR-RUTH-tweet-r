<<<<<<< HEAD
import { Component, useEffect, useState, useRef } from 'react';
import LikeButton from './LikeButton';

=======
import { useState } from 'react';
>>>>>>> origin/react

export default function Like(props){


    const [tweet, likeTweet] = useState({
		tweet:{
            likes: ''
    }})

	const [tweetLike, setTweetlike] = useState(false);
	const tweetInput = useRef(null);
	const nameInput = useRef(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`https://seir-tweeter-api.herokuapp.com/tweets`);
				const data = await response.json();
				likeTweet(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [tweet, tweetLike]);
	const addToAPI = async e => {
		try {
			const response = await fetch(`https://seir-tweeter-api.herokuapp.com/tweets`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'aplication/json'
				}
			});
			const data = await response.json();
			setTweetlike(!tweetLike);
		} catch (error) {
			console.error(error);
		} 
	};


return (
    <>
    
    <LikeButton onClick={addToAPI} />
    <button onClick={addToAPI}>TEST</button>
   

    </>
)}



