import { useEffect, useState } from 'react';

export default function Like(props){

const [likes, addLikes] = useState(0);

useEffect(() => {
    (async () => {
        try {
            const res = await fetch('');
            const data = await res.json()
        } catch (error) {
            console.error(error)
        }
    })()
}, [])

return (
    <>
    <button onClick={event => addLikes(likes + 1)}>
        Like
    </button>
    <h4>{likes}</h4>
    </>



    )






}



