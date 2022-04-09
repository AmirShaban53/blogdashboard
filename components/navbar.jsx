import  {Dashboard, Subject, FolderOpenOutlined, Settings, PowerSettingsNew} from '@material-ui/icons';
import classes from '../styles/navbar.module.css';
import '../styles/navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [height, setHeight] = useState(0);
    const style = {top: `${height}px`};
    const navIndicator = (e) => {setHeight(e);}
    return (
        <nav className={classes.navbar}>
        <div className={classes.container}>
            <div className="nav-brand p-3">
                <h1>H<span className='d-none d-sm-inline'>ELLO!</span></h1>
            </div>
            <div className='container-fluid p-0'>
                <ul className={`${classes.navList} container-fluid w-100 position-relative`}>
                    <li 
                        className={`${classes.navItem }`}
                        onClick={(e)=>navIndicator(e.currentTarget.offsetTop)}
                    >
                        <Link  href='/'>
                            <div className='w-100 p-2 text-end text-sm-start'>
                                <Dashboard className='me-3'/>
                                <span className='d-none d-sm-inline'>dasboard</span>
                            </div>
                        </Link>
                    </li>
                    <li 
                        className={classes.navItem}
                        onClick={(e)=>navIndicator(e.currentTarget.offsetTop)}
                    >
                        <Link  href='/compose'>
                            <div className=' w-100 p-2 text-end text-sm-start'>
                                <Subject className='me-3'/>
                                <span className='d-none d-sm-inline'>compose</span>
                            </div>
                        </Link>
                    </li>
                    <li 
                        className={classes.navItem} 
                        onClick={(e)=>navIndicator(e.currentTarget.offsetTop)}
                    >
                        <Link  href='/posts'>
                            <div className='w-100 p-2 text-end text-sm-start'>
                                <FolderOpenOutlined className='me-3'/>
                                <span className='d-none d-sm-inline'>posts</span>
                            </div>
                        </Link>
                    </li>
                    <li 
                        className={classes.navItem}
                        onClick={(e)=>navIndicator(e.currentTarget.offsetTop)}
                    >
                        <Link  href='/settings'>
                            <div className='w-100 p-2 text-end text-sm-start'>
                                <Settings className='me-3'/>
                                <span className='d-none d-sm-inline'>settings</span>
                            </div>
                        </Link>
                    </li>
                    <div className={`${classes.indicator}`} style={style}></div>
                </ul>
            </div>
            <div className='d-flex align-items-center p-3'>
                <Link href='/auth'>
                    <div className='d-flex cursor text-end text-sm-start'>
                        <PowerSettingsNew className="me-2"/>
                        <h5 className='d-none d-sm-inline'>logout</h5>

                    </div>
                </Link>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;