import { useEffect, useState } from 'react';

export default function Like(props){

const [likes, addLikes] = useState(0);


useEffect(() => {
    (async () => {
        try {
            const res = await fetch('/seir-tweeter-api.herokuapp.com/tweets');
            const data = await res.json()
            await addLikes(data.likes)
        } catch (error) {
            console.error(error)
        }
    })()
}, [])


const updateLikes = async event => {
    event.preventDefault();
    try {
        const response = await fetch(`/seir-tweeter-api.herokuapp.com/tweets/${props.match.params.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                note: noteInput.current.value,
                parkID: props.match.params.id
            })
        });
        const data = await response.json();
        setNotes([...notes, data]);
    } catch (error) {
        console.error(error);
    }
};

return (
    <>
    <button onClick={event => addLikes(likes + 1)}>
        Like
    </button>
    <h4>{likes}</h4>
    </>
)}



