import React, { useState } from 'react';
import "./_header.scss";
import{FaBars} from "react-icons/fa";
import{BsMic} from "react-icons/bs";
import{MdNotifications, MdApps} from "react-icons/md";
import {AiOutlineSearch,AiOutlineVideoCameraAdd} from "react-icons/ai"
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'


function Header({handleToggleSidebar}) {

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        history.push(`/search/${input}`)
    }
    const user = useSelector(state => state.auth?.user)

    const [input, setInput] = useState('')

    return (
        <div className="border border-dark header">
            <FaBars
            className="header__menu" size={26}
            onClick={()=>handleToggleSidebar()}
            />
            <img src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" className="header__logo"/>

            <form  onSubmit={handleSubmit}>
                <input type="text" placeholder="Search" value={input} onChange={e=>setInput(e.target.value)}/>
                <button type="submit">
                    
                    <AiOutlineSearch size={22}/>

                </button>
                </form>
                <div className="header__icons">
                    <BsMic className="mic" size={23}/>
                    <div className="icn">
                        <AiOutlineVideoCameraAdd  className="v" size={23}/>
                    <MdNotifications size={28}/>
                    <MdApps className="a" size={28}/>
                    <img className="avt" src={user?.photoURL} alt="avatar" />
                    </div>
                    
                </div>
        </div>
    )
}

export default Header
