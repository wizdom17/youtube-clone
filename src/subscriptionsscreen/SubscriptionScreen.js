import './subscrtion.scss'
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getSubscribedChannels } from '../video.action'
import { Container } from 'react-bootstrap'
import VideoHorizontal from '../videoHorizontal/VideoHorizontal'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const SubscriptionScreen = () => {


   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getSubscribedChannels())
   }, [ dispatch])

   const {loading,videos} = useSelector(state => state.subscriptionsChannel)

    return (
        <Container fluid>
            {
                !loading?videos?.map(video=> <VideoHorizontal video={video} key={video.id }subscreen/>):<SkeletonTheme color='#343a40' highlightColor='#3c4147'>
               <Skeleton width='100%' height='160px' count={20} />
            </SkeletonTheme>
            }
        </Container>
    )
}

export default SubscriptionScreen
