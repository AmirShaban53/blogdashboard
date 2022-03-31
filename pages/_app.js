import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from '../components/navbar'
import Layout from '../components/layout'
// import Header from '../components/header'

function MyApp({ Component, pageProps }) {
  return (<>
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
