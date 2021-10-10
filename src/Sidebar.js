import React from 'react';
import "./_sidebar.scss";
import { MdSubscriptions,MdExitToApp,MdThumbUp,MdLibraryBooks,MdHome,MdSentimentDissatisfied,MdHistory } from "react-icons/md"
import {FaRegCompass} from "react-icons/fa"

import { useDispatch } from 'react-redux';
import { log_out } from './redux/actions/auth.action';
import { Link } from 'react-router-dom';

function Sidebar({sidebar, handleToggleSidebar}) {

    const dispatch = useDispatch()
    const logOutHandler= ()=>{
        dispatch(log_out())
    }

    return (
        <nav className={sidebar ? "sidebar open": "sidebar"}  onClick={()=> handleToggleSidebar(false)}>
            <li>
                <MdHome size={23}/>
                <span>
                    Home
                </span>
            </li>

            <li>
                <FaRegCompass size={23}/>
                <span>
                    Explore
                </span>
            </li>
            
            <Link to="/feed/subscription">
                <li >
                    <MdSubscriptions size={23}/>
                    <span>Subscription</span>
                </li>
            </Link>

            
            <li>
                <MdThumbUp size={23}/>
                <span>LikedVideos</span>
            </li>
            <li>
                <MdHistory size={23}/>
                <span>History</span>
            </li>
            <li>
                <MdLibraryBooks size={23}/>
                <span>Libary</span>
            </li>
            <li>
                <MdSentimentDissatisfied size={23}/>
                <span>I don't Know</span>
            </li>
            <hr/>

            <li onClick={logOutHandler}>
                <MdExitToApp size={23}/>
                <span>Log Out</span>
            </li>
            <hr/>

        </nav>
    )
}

export default Sidebar
