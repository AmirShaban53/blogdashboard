import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from '../components/navbar';
import Layout from '../components/layout';

import { useEffect, useState } from 'react';
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
    <>
      <div className='app'>
        <Navbar/>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  )
}

export default MyApp
