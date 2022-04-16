import { useEffect, useState, useContext } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import Navbar from '../components/navbar';
import Layout from '../components/layout';
import {AppContext} from '../AppContext';
import { Context } from '../AppContext';

import { useRouter } from 'next/router';


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
            <Component {...pageProps} />
          </AppContext>
        </Layout>
    </div>
  )
}

export default MyApp
