import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from './video.action';
import "./_categories.scss"

function Categories() {

    const keyWords=[
        "All",
        "React js",
        "Angular js",
        "React Native",
        "use of API",
        "Redux",
        "Music",
        "Algorithm Art",
        "Guiter",
        "Bengali song",
        "coding",
        "Interview",
        "Man City",
        "Chealsea",
        "Programming",
        "Messi",
        "football",
        "Basketball"
    ]

const [activeElement, setActiveElement] = useState('All')

const dispatch = useDispatch()

const handleClick=(value)=>{
    setActiveElement(value)
    if(value=== 'All'){
        dispatch(getPopularVideos)
    }
    else{
        dispatch(getVideosByCategory(value))
    }
    
}

    return (
        <div className="categoriesBar">
            {
                keyWords.map((value,i) =><span onClick={()=>handleClick(value)} key={i}
                className={activeElement === value? "active" : ""}
                >{value}</span>)
            }
        </div>
    )
}

export default Categories
