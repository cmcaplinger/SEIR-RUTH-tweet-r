import { useState } from 'react';

export default function Like(props){


const [likes, setLikes] = useState([]);
// const [isLiked, updatedLiked] = useState(false);

// const handleLikes = () => {
//     if (!isLiked) {
//         updatedLiked(true)
//         setLikes(likes => likes + 1);
//         addToAPI();
//     }
// }


const addToAPI = async event => {
    event.preventDefault();
    // updatedLiked(false)
     try {
        const response = await fetch(`/seir-tweeter-api.herokuapp.com/tweets/1`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tweet: {
                    likes: likes
                }
            })
        });
        const data = await response.json();
        setLikes([...likes, data.likes]);
    } catch (error) {
        console.error(error);
    }
};


return (
    <>
    <button onClick={addToAPI}>
        Like
    </button>

    </>
)}



