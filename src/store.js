import {createStore,applyMiddleware,combineReducers} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk"
import { authReducer } from './redux/reducres/auth.reducer';
import { channelVideosReducer, homeVideosReducer, searchVideoReducer, subscriptionsChannelReducer } from './redux/reducres/videos.reducer';
import { selectedVideoReducer } from './redux/reducres/videos.reducer';
import {channelDetailsReducer} from './redux/reducres/channelss.reducer'
import { commentsListReducer } from './redux/reducres/comments.reducer';
import { relatedVideoReducer } from './redux/reducres/videos.reducer';


const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos:homeVideosReducer,
    selectedVideo: selectedVideoReducer,
    channelDetails: channelDetailsReducer,
    commentsList:commentsListReducer,
    relatedVideos:relatedVideoReducer,
    searchVideo:searchVideoReducer,
    subscriptionsChannel:subscriptionsChannelReducer,
    channelVideos:channelVideosReducer
});

const store= createStore(rootReducer, {},composeWithDevTools(applyMiddleware(thunk)))


export default store