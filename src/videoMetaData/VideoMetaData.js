import React, { useEffect } from 'react'
import './_videoMetaData.scss'
import  numeral from 'numeral'
import moment from 'moment'
import { MdThumbUp,MdThumbDown } from 'react-icons/md'
import ShowMoreText  from 'react-show-more-text'
import { useDispatch, useSelector } from 'react-redux'
import { checkSubscriptionStatus, getChannelDetails } from '../redux/reducres/channel.action'

const VideoMetaData = ({video:{snippet,statistics},videoId}) => {

    const {snippet:channelSnippet,statistics:channelStatistics} = useSelector(state=> state.channelDetails.channel)

    const {channelId,channelTitle,description,title,publishedAt} = snippet;
    const {viewCount,likeCount,dislikeCount} = statistics;

    const dispatch = useDispatch()

    const subscriptionStatus = useSelector(state =>  state.channelDetails.subscriptionStatus)

    useEffect(() => {
        dispatch(getChannelDetails(channelId))
        dispatch(checkSubscriptionStatus(channelId))
    }, [dispatch, channelId])

    return (
        <div className="videoMetaData py-2">
            <div className="videoMetaData__top">
                <h5>
                    {title}
                </h5>
                <div className="d-flex align-items-center  justify-content-between py-1" >
                    <span>
                        {numeral(viewCount).format("0.a")} views •{'  '}
                        {moment(publishedAt).fromNow()} 
                    </span>
                
                <div>
                    <span className="mr-3"><MdThumbUp size={26}/>{numeral(likeCount).format("0.a")}</span>
                    <span className="mr-3"><MdThumbDown size={26}/>{numeral(dislikeCount).format("0.a")}</span>
                </div>
            
            </div>
        </div>

            <div className="videoMetaData__channels d-flex justify-content-between align-items-center my-2 py-3"> 
                <div className="d-flex">
                    <img src={channelSnippet?.thumbnails?.default?.url} alt="" className="rounded-circle mr-3 "/>
                    <div className="d-flex flex-column">
                        <span>{channelTitle}</span> 
                        <span>{'   '}{numeral(channelStatistics?.subscriberCount).format("0.a")} {'   '}Subscribers</span>
                    </div>
                </div>
                
                <button className={`btn border-0 p-2 m-2 ${subscriptionStatus && 'btn-gray'}`}>{subscriptionStatus?'Subscribed':'Subscribe'}</button>
            </div>
        
            
            
            <div className="videoMetaData__description ">
                <ShowMoreText lines={3} more="SHOW MORE" less="SHOW LESS" anchorClass="showMoreText" expanded={false}>

                {description}
                </ShowMoreText>
            </div>
        </div>
    )
}

export default VideoMetaData
