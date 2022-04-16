import { useState, useEffect, createContext} from "react";
import axios from "axios";

const URL = process.env.NEXT_PUBLIC_URL;
const LOCAL_TOKEN_KEY = "next_public_token";


export const Context = createContext();

export const AppContext = ({children}) => {
    const [active, setActive] = useState(false);
    const [message, setMessage] = useState('');
    const [bgColor, setBgcolor] = useState('');
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);


    const alertMessage = (message, bgColor) => {
        setActive(!active);
        setMessage(message);
        setBgcolor(bgColor);
        setTimeout(() => {
        setActive(prevState => {return !prevState});
        }, 2500);
    }

    const getPosts = async() => {
        try {
            const posts = await axios.get(`${URL}/posts`);
            if(posts.data.length > 0)setPosts(posts.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getComments = async () => {
        try {
            if(posts.length > 0){
                const index = Math.floor(Math.random() * posts.length);
                const post = posts[index];
                const commentJSON =  await axios.get(`${URL}/posts/${post.id}/comment`);
                if(commentJSON.data.length > 0) setComments(commentJSON.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    
    const contextValue = {
        posts,
        active,
        message,
        bgColor,
        comments,
        getPosts,
        getComments,
        alertMessage
    }
    return <Context.Provider value={contextValue}>{children}</Context.Provider>
}
