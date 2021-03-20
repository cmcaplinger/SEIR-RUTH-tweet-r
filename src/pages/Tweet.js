import React, { useState, useEffect, useRef } from 'react';
import Card from '../components/Card'
import LikeButton from '../components/LikeButton';

export default function Tweet(props) {

    const [cardInfo, setCardInfo] = useState({})
    const [comments, setComments] = useState([])
    // const [deleted, setDeleted] = useState(false)
    const commentInput = useRef(null);

    let filteredComments;

    // Fetch the specific tweet we clicked on from the app page
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`https://seir-tweeter-api.herokuapp.com/tweets/${props.match.params.id}`);
                const data = await res.json()
                await setCardInfo(data.tweet)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])

    // Fetching all the comments the filtering the comments by a property tweet_id, checking if that property equals the tweet we came from, should be two matching integers
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`https://seir-tweeter-api.herokuapp.com/comments`);
                const data = await res.json()
                await setComments(data.filter(comment => comment.tweet_id == props.match.params.id))
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])   
    
    // const handleDelete = async (e) => {
    //     e.preventDefault()
    //     try {
    //         const response = await fetch(`https://seir-tweeter-api.herokuapp.com/tweets/${props.match.params.id}`, {
    //             method: 'DELETE',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         const data = await response.json()
    //         setDeleted(!deleted);
    //     } catch (error) {
    //         console.error(error)
    //     } finally {
    //         window.location.assign('/')
    //     }
    // }

    // Posting a comment to our API, giving that comment a value tweet_id that matches the tweet we came from (props.match.params.id) thus making that comment connect to that tweet
    const createComment = async (e) => {
        e.preventDefault();
        const commentValue = commentInput.current.value
        const body = JSON.stringify({
            comments:{
                content: commentValue,
                tweet_id: parseInt(props.match.params.id)
            } 
        });
        try {
            const response =  await fetch(`https://seir-tweeter-api.herokuapp.com/comments}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });
            const data = await response.json()
            setComments(data);
        } catch (error) {
            console.error(error);
        } finally {
            window.location.replace(`/Tweet/${props.match.params.id}`)
        }
    }

    return(
        <div className="tweet-container">
            <div className="show-card">
                {/* This maps over the object (the tweet API is an object, had to use object.keys to be able to map it... this is us mapping the tweet.) */}
                {/* {
                    Object.keys(cardInfo).map((card) => {
                        return (
                            <> */}
                                <Card
                                    // name={card.name}
                                    key={cardInfo.id}
                                    username={cardInfo.user_id}
                                    content={cardInfo.content}
                                    timestamp={cardInfo.created_at}
                                    likes={cardInfo.likes}

                                    // retweets={card.retweets}
                                />
                            {/* </> */}
                        {/* )
                    })
                } */}
                {/* Adding a space to create a comment */}
                <div className="add-comments">
                    <form onSubmit={createComment}>
                        <div className="create-comment-input">
                            <input  type="text" ref={commentInput}>
                            </input>
                            <input onClick={createComment} type="submit" className="comment-button" defaultValue="Comment"/>
                        </div>  
                    </form>
                </div>  
                {/* mapping over all the comments, we set our useState comments to filter out the API for only comments connecting to the tweet */}
                {
                    comments.map(comments=> {
                        return(
                            <>
                                <Card
                                    key={comments.id}
                                    username={comments.username}
                                    content={comments.content}
                                    timestamp={comments.created_at}
                                />
                                 
                            </>
                        )
                    })
                }
               
            </div>
        </div>
    )
}