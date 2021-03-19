import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Like from '../components/Like'


export default function Card(props) {

    // const handleClick = (e) => {
    //     e.preventDefault()

    // }

    return (
        <>
            <Link to={`/Tweet/${props.id}`}> 
                <div>

                    <img className="avatar"/>
                    <h3 className='username' username={props.username}> {props.username} </h3>
                    <p className='content' content={props.content}> {props.content} </p>
                    <p className='timestamp' timestamp={props.timestamp}> {props.timestamp} </p>
                    <small className='likes' likes={props.likes}>{props.likes}</small> <br />
                    <small className='retweets' retweets={props.retweets}>{props.retweets}</small>
                </div>    
            </Link> */)
            {/* <Like/>
            <Retweet/> */}




                <Link to={`/Tweet/${props.id}`}> 
                    <div class="card">
                        <div class="image-and-content">
                            <img src="https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png"/>
                                <div class="content">
                                    <div class="top">
                                        <p class="user-name">{props.username}</p>
                                        <p class="handle-name">@coolbob</p>
                                        <p class="date">{props.timestamp}</p>
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

            <Link />

        </>
    )
}