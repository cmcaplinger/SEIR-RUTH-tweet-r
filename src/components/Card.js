import LikeButton from './LikeButton'



export default function Card(props) {

    // const handleClick = (e) => {
    //     e.preventDefault()

    // }

    return (
        <>

            <div className="Card-Component"> 
                    <div className="card">
                        <div className="image-and-content">
                            <img src="https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png"/>
                                <div className="content">
                                    <div className="top">
                                        <p className="user-name">{props.username}</p>
                                        <p className="handle-name">@coolbob</p>
                                        <p className="date">{props.timestamp}</p>
                                    </div>
                                        <p className="tweet">{props.content}</p>
                                </div>  
                                <div className="actions">
                                        <ion-icon name="chatbubbles-outline"></ion-icon> {props.comments}
                                        <ion-icon name="heart-outline"></ion-icon> {props.likes}         
                                </div>
                        </div>
                    </div>
            </div>
          
            <LikeButton />
        </>
    )
}