import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import Like and Retweet

export default function Card(props) {

    // const handleClick = (e) => {
    //     e.preventDefault()

    // }

    return (
        <>
                <div className="card" onClick={<Link to={`/Tweet/${props._id}`}/>}>
                    <img className="avatar"/>
                    <h3 className='username' username={props.username}> {props.username} </h3>
                    <p className='content' content={props.content}> {props.content} </p>
                    <p className='timestamp' timestamp={props.timestamp}> {props.timestamp} </p>
                    <small className='likes' likes={props.likes}>{props.likes}</small>
                    <small className='retweets' retweets={props.retweets}>{props.retweets}</small>
                </div>
            {/* <Like/>
            <Retweet/> */}
        </>
    )
}