import { useState, useEffect } from 'react';
import axios from 'axios'
import { AccountCircle } from '@material-ui/icons';

const URL = process.env.NEXT_PUBLIC_URL;

const CommentsList = () => {
    const [comments, setComments] = useState([]);

    const getComments = async() => {
      try {
        const posts = await axios.get(`${URL}/posts`);
        
        if(posts.data.length > 0){
          const index = Math.floor(Math.random()* posts.data.length);
          const post = posts.data[index];
          const commentsJSON = await axios.get(`${URL}/posts/${post.id}/comment`);
          
          if(commentsJSON.data)setComments(commentsJSON.data);
          
        }
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
        getComments();
    }, [])

    return(
        <div className="row my-5">
            <h3>Comments</h3>
            <div className="card shadow">
                {comments.length> 0 ? 
                comments.map(comment => {
                    return (
                    <div className="border-bottom m-3" key={comment.id}>
                        <div className="d-flex ">
                            <AccountCircle/>
                            <div className="ms-2">
                                <h5>{comment.name}</h5>
                                <p>{comment.comment}</p>
                            </div>
                        </div>
                    </div>)
                }) : 
                <p>no comments</p>}

            </div>
        </div>
    )
}
export default CommentsList;