import {useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import { AccountCircle } from '@material-ui/icons';
import {Context} from '../AppContext';


const CommentsList = () => {
    const router = useRouter();
    const {comments, getComments} = useContext(Context);


    useEffect(() => {
        getComments();
    }, [router.pathname])

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