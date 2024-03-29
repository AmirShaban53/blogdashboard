import classes from '../styles/dasboard.module.css'
import CommentsList from '../components/commentsList'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react';
import Head from 'next/head';

import { Context } from '../AppContext';

export default function Home() {
  const router =  useRouter();
  const {user, posts, getPosts, getUserData} = useContext(Context)
  
  const viewPosts = () => {
    router.push('/posts');
  }

  useEffect(() => {
    getUserData();
    getPosts();
  }, []);

  return (
    <>
    <Head>
      <title>dashboard | home</title>
    </Head>
      <main>
        <div className={classes.title}>
          <h1 className='display-1 fw-bolder cursor'>Hello,</h1>
          <h1 className="display-3">{user.username}</h1>
        </div>
        <div className="">
          <h2>dashboard</h2>
          <div className="container-fluid">
            <div className="row ">
              <div className="col-lg-3 mb-3">
                <div className="card h-100 cursor shadow" onClick={()=>viewPosts()}>
                  <div className="card-body d-flex align-items-center justify-content-center">
                    <div>
                      <div className='d-flex align-items-center'>
                        <p className='fs-1'>{posts.length}</p>
                        <p className='fs-3 fst-italic fw-lighter ms-2'>posts.</p>
                      </div>
                      <p className='text-center'>view all</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 ">
                <div className="card shadow">
                  <div className="container p-0">
                    <div className="row">
                      <div className="col-md-7 p-4">
                        <h4 className="fs-3">Welcome to MAC POST</h4>
                        <p>Transforming the future today.</p>
                        <a href={process.env.NEXT_PUBLIC_FRONTEND_URL} rel="noreferrer" target='_blank' className="fw-bolder">www.macpost.vercel.app</a>
                      </div>
                    <div className="col-md-5">
                      <img className="img-fluid" src="logo.jpg" alt="" />
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CommentsList/>
          </div>
        </div>
      </main>
    </>
  )
}
