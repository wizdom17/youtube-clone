import React, {useEffect} from 'react'
import {Container,Col} from "react-bootstrap"
import Video from './Video'
import Categories from './Categories'
import {useDispatch, useSelector} from "react-redux"
import {getPopularVideos, getVideosByCategory} from './video.action'
import InfiniteScroll from 'react-infinite-scroll-component';
import SkeletonVideo from './SkeletonVideo'

function Homescreen() {

    const  dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])

    // const {videos} = useSelector(state=>state.homeVideos)

    const { videos,activeCatgory,loading} = useSelector(state => state.homeVideos)

    const fetchData= ()=>{
        if(activeCatgory === 'All'){
            dispatch(getPopularVideos())
        }
        else{
            dispatch(getVideosByCategory(activeCatgory))
        }
    }

    return (
        <Container>
            <Categories/>
            
                <InfiniteScroll
                dataLength={videos.length}
                next={fetchData}
                hasMore={true}
                loader={
                    <div className='spinner-border text-danger d-block mx-auto'>

                    </div>
                }
                className='row'
                >
                    {
                        !loading ? videos.map((video)=>(
                            <Col lg={3} md={4} key={video.id}>
                                <Video video={video} />
                            </Col>
                    )):
                    [...Array(20)].map(()=><Col lg={3} md={4} >
                        
                        <SkeletonVideo/>
                        
                    </Col>
                    )}
                </InfiniteScroll>
                
        
        </Container>
    )
}

export default Homescreen
