import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Like from '../components/Like'


export default function Card(props) {

    // const handleClick = (e) => {
    //     e.preventDefault()

    // }

    return (
        <>
            {/* <Link to={`/Tweet/${props.id}`}> 
                <div className="card">
                    <img className="avatar"/>
                    <h3 className='username' username={props.username}> {props.username} </h3>
                    <p className='content' content={props.content}> {props.content} </p>
                    <p className='timestamp' timestamp={props.timestamp}> {props.timestamp} </p>
                    <small className='likes' likes={props.likes}>{props.likes}</small> <br />
                    <small className='retweets' retweets={props.retweets}>{props.retweets}</small>
                </div>    
            </Link> */}
            {/* <Like/>
            <Retweet/> */}



            <div className="Card-Component">
                <Link to={`/Tweet/${props.id}`}> 
                    <div className="card">
                        <div className="image-and-content">
                            {/* <img src="https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png"/> */}
                                <div className="content">
                                    <div className="top">
                                        <p className="user-name">{props.username}</p>
                                        <p className="handle-name">@coolbob</p>

                                        <p className="date">{props.timestamp}</p>
                                    </div>
                                        <p className="tweet">{props.content}</p>
                                <div className="actions">
                                        <ion-icon name="chatbubbles-outline">{props.comments}</ion-icon> 
                                        <ion-icon name="heart-outline">{props.likes}</ion-icon>             
                                </div>
                            </div>  
                        </div>
                    </div>
                </Link>

            </div>

            <Like />

        </>
    )
}