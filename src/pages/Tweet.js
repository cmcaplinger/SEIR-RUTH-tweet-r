import React, { useState, useEffect, useRef } from 'react';
import Card from '../components/Card'


export default function Tweet(props) {

    const [cardInfo, setCardInfo] = useState([])
    const commentInput = useRef(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`https://seir-tweeter-api.herokuapp.com/tweets/${props.match.params.id}`);
                const data = await res.json()
                await setCardInfo(data)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])

    const createComment = async (e) => {
        e.preventDefault();

        const commentValue = commentInput.current.value
        const body = JSON.stringify({
            comments:{
                content: commentValue
            } 
        });
        try {
            const response =  await fetch(`https://seir-tweeter-api.herokuapp.com/tweets/${props.match.params.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <div className="tweet-container">
            <div className="show-card">
                {
                    Object.keys(cardInfo).map((card) => {
                        return (
                            <>
                                <Card
                                    // name={card.name}
                                    username={card.user_id}
                                    content={card.content}
                                    timestamp={card.created_at}
                                    likes={card.likes}
                                    comments={card.comments}
                                    // retweets={card.retweets}
                                />
                            </>
                        )
                    })
                }
            </div>
            <div className="add-comments">
                <form onSubmit={createComment}>
                    <div className="create-comment-input">
                        <input  type="text" ref={commentInput}>
                        </input>
                        <input onClick={createComment} type="submit" className="comment-button" defaultValue="Comment"/>
                    </div>  
                </form>
            </div>  
        </div>
    )
}