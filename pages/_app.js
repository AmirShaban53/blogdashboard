import { useEffect, useState, useContext } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import Navbar from '../components/navbar';
import Layout from '../components/layout';
import {AppContext, Context} from '../AppContext';
import { useRouter } from 'next/router';
import Message from '../components/message';


function MyApp({ Component, pageProps }) {
  const Router = useRouter();
  const getLogged = () => {
    const token =  sessionStorage.getItem('next_public_token');
    if(!token){
      Router.push('/auth')
    }
  }

  
  useEffect(() => {
    getLogged();
  }, [Router.pathname])

  return (
    <div className='app'>
      <Navbar/>
        <Layout>
          <AppContext>
            <Component {...pageProps}/>
            <Message/>
          </AppContext>
        </Layout>
    </div>
  )
}

export default MyApp
