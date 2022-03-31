import  {Dashboard, Subject, FolderOpenOutlined, Settings, PowerSettingsNew} from '@material-ui/icons';
import classes from '../styles/navbar.module.css';
import '../styles/navbar.module.css';
import Link from 'next/link';


const Navbar = () => {
    return (
        <nav className={classes.navbar}>
        <div className={classes.container}>
            <div className="nav-brand p-3">
                <h1>HELLO!</h1>
            </div>
            <div className='container-fluid p-0'>
                <ul className={`${classes.navList} container-fluid w-100`}>
                    <li 
                        className={`${classes.navItem } ${classes.active}`}
                    >
                        <Dashboard className='me-3'/>
                        <Link  href='/'>dasboard</Link>
                    </li>
                    <li className={classes.navItem}>
                        <Subject className='me-3'/>
                        <Link href='/compose'>compose</Link>
                    </li>
                    <li className={classes.navItem}> 
                        <FolderOpenOutlined className='me-3'/>
                        <Link href='/posts'>posts</Link>
                    </li>
                    <li className={classes.navItem}> 
                        <Settings className='me-3'/>
                        <Link href='/settings'>settings</Link>
                    </li>
                </ul>
            </div>
            <div className='d-flex align-items-center p-3'>
                <Link href='/auth'>
                    <div className='d-flex'>
                        <PowerSettingsNew className="me-2"/>
                        <h5>logout</h5>

                    </div>
                </Link>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;