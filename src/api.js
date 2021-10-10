import axios from 'axios'

console.log(process.env.REACT_APP_YT_API_KEY);

const request = axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:"AIzaSyDoKRRyQ86XQg9m01Y8hSAfzjPNS3wSGAs",
    }
})

export default request;