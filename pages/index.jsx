import classes from '../styles/dasboard.module.css'
import CommentsList from '../components/commentsList'
import Message from '../components/message';
import { useRouter } from 'next/router'
import { useEffect, useState, useContext } from 'react';

import { Context } from '../AppContext';

export default function Home() {
  const router =  useRouter();
  const [active, setActive] = useState(false);
  const {alertMessage, getPosts, getComments} = useContext(Context)
  
  const viewPosts = () => {
    router.push('/posts');
  }

  

  // useEffect(() => {
  //   getPosts();
  //   getComments();
  // }, []);
  return (
    <>
      <main>
        <div className={classes.title}>
          <h1 className='display-1 fw-bolder cursor' onClick={()=>alertMessage('dasdsad','alert-primary')}>Hello,</h1>
          <h1 className="display-3">Amir Budda.</h1>
        </div>
        <div className="">
          <h2>dashboard</h2>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3">
                <div className="card h-100 cursor shadow" onClick={()=>viewPosts()}>
                  <div className="card-body">
                    <div className='d-flex align-items-center my-3'>
                      <p className='fs-1'>81</p>
                      <p className='fs-3 fst-italic fw-lighter h-100 ms-2'>posts.</p>
                    </div>
                    <p>view all</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card shadow">
                  <div className="container p-0">
                    <div className="row">
                      <div className="col-md-7 p-4">
                        <p className="fs-3">Lorem, ipsum dolor.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, facere deleniti maxime vero eius possimus.</p>
                      </div>
                    <div className="col-md-5">
                      <img className="img-fluid" src="720.jpg" alt="" />
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
      <Message/>
    </>
  )
}
