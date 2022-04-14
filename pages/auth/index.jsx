import styles from '../../styles/auth.module.css';

import Login from '../../components/login';
import Register from '../../components/register';
import { AccountCircle, ChevronLeft } from '@material-ui/icons';

import Link from 'next/link';

import { useState } from 'react';

const Auth = () => {
    const [login, setLogin] = useState(true);
    return(
        <div className={styles.auth}>
            <div className='text-light container d-flex align-items-center justify-content-between py-1'>
                <div>
                    <Link href='/'>
                        <div className='d-flex cursor'>
                        <ChevronLeft/>
                        <p className='d-none d-sm-inline'>return to home</p>
                        </div>
                    </Link>
                </div>
                <div className='d-flex align-items-center'>
                    {login ? <p className='mt-3 me-2 '>Not a member?</p>:<p className='mt-3 me-2 '>already a member?</p>}
                    {
                        login?
                        <label 
                            className='btn btn-outline-light px-3 mx-2'
                            onClick={()=>{setLogin(false)}}
                        >
                            Sign Up
                        </label>:

                        <label 
                            className='btn btn-outline-light px-3 mx-2'
                            onClick={()=>{setLogin(true)}}
                        >
                            Login
                        </label>
                    }
                </div>
            </div>
            <div className={`text-center ${styles.authIcon}`}>
                <AccountCircle className={styles.largeIcon}/>
            </div>
            <div className={`${styles.authForm} `}>
                {login ?<Login/>: <Register/>}
                
            </div>
        </div>
    )
}

export default Auth;