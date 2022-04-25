import AuthorCard from "../../components/authorCard";
import classes from '../../styles/setting.module.css';
import Head from "next/head";

import { useContext, useEffect } from "react";
import { Context } from "../../AppContext";
import Image from 'next/image';

const Settings = () => {
    const {user, getUserData, getPosts, getComments, posts} = useContext(Context);

    useEffect(() => {
        getUserData();
        getPosts();
    }, []);
    return (
    <>
        <Head>
            <title>dashboard | settings</title>
        </Head>
        <main>
            <div className="container">
                <div className={`row mb-5 pb-5 g-0`}>
                    <div className={`col-sm-4 text-dark`}>
                        <Image className='img-fluid rounded-3' src="/user.jpg" width="3" height="3" layout="responsive"/>
                        <h4 className='d-block d-sm-none'>{user.username}</h4>
                    </div>
                    <div className={`col-sm-8 position-relative d-none d-sm-inline`}>
                        <div className={`w-100 h-100 ${classes.details} p-5 bg-dark text-light`}>
                            <h2>{user.username}</h2>
                            <h3>{user.email}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4>authors</h4>
                            <AuthorCard posts={posts}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
    )
}
export default Settings;