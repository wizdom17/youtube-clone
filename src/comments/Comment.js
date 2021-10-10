import React from 'react'
import moment from 'moment'
import '../comments/_comment.scss'



const Comment = ({comment}) => {

const {authorDisplayName,authorProfileImageUrl,publishedAt,textDisplay} = comment

    return (
        <div className="comment p-2 d-flex">
            <img src={authorProfileImageUrl} alt="" />

            <div className="comment__body">
                <p className="comment__header mb-1">
                    {authorDisplayName}  • {moment(publishedAt).fromNow()}
                </p>
                <p className="mb-0 commen">
                {textDisplay}
                </p>
            </div>
        </div>
    )
}

export default Comment
