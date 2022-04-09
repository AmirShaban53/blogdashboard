import { FaceRounded, NotificationsOutlined, WbCloudy, BrokenImage } from "@material-ui/icons";
import classes from '../styles/header.module.css'

const Header = () => {
    return(
        <div className={`${classes.header} px-1 px-sm-5`}>
            <div className="h-100 d-flex align-items-center justify-content-between">
                <div>
                    <BrokenImage/>
                </div>
                <div>
                    <WbCloudy className='mx-2'/>
                    <NotificationsOutlined className='mx-2'/>
                    <FaceRounded className='mx-2'/>
                </div>
            </div>
        </div>
    )
}

export default Header;