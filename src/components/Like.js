// import { useEffect, useState } from 'react';

// export default function Like(props){


// // const [likes, setLikes] = useState([]);
// const [likeCount, setLikeCount] = useState([]);
// const [specificLike, setSpecificLike] = useState(null);

// const handleLikes = () => {
//     async () => {
//         try {
//             const res = await fetch(`https://seir-tweeter-api.herokuapp.com/tweets/${/* the map content */}`);
//             const data = await res.json();
//             setLikeCount([...data.tweet.likes]);
//             setSpecificLike(data.tweet.likes);
//         } catch (e) {
//             console.error(e)
//         }
//     }

//     setSpecificLike(specificLike += 1)
//     setLikeCount([...likeCount, specificLike])
//     addToAPI(likeCount.length -1);
// }




// const addToAPI = async (event, likes) => {
//     event.preventDefault();
//     const 
//      try {
//         const response = await fetch(`/seir-tweeter-api.herokuapp.com/tweets/1`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 tweet: {
//                     likes: likes
//                 }
//             })
//         });
//         const data = await response.json();
//         setLikes([...likes, data.likes]);
//     } catch (error) {
//         console.error(error);
//     }
// };


// return (
//     <>
//     <button onClick={addToAPI}>
//         Like
//     </button>

//     </>
// )}



