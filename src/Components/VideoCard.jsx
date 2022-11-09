import React from 'react'
import { Card, CardContent, CardMedia, Typography,} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Link} from "react-router-dom"
const VideoCard = ({video:{id:{videoId},snippet}}) => {
    const demoVideoUrl = '/video/GDa8kZLNhJ4';
    const demoChannelTitle = 'JavaScript Mastery';
    const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
    const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
  return (
  <>
  <Card sx = {{width:{md:"300px",xs:"100%",borderRadius:"none",boxShadow:"none",}}}>
<Link to = {videoId ? `/video/${videoId}`:demoVideoUrl} >

<CardMedia image = {snippet?.thumbnails?.high?.url} alt = {snippet?.title} sx = {{width :"auto" ,height : "12vw"}}   />


</Link>
<CardContent sx = {{backgroundColor : "#1e1e1e", height :"0px"}} />

<Link to = {videoId?`/video/${videoId}`:demoVideoUrl} >

<Typography variant = "subtitle1" fontWeight="bold" color="#4a594e" >

{
    snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)
}

</Typography>

</Link>


<Link to = {snippet?.channelId ?`/channel/${snippet?.channelId}` :demoChannelUrl} >

<Typography variant = "subtitle1" fontWeight="bold" color="gray" >

{
    snippet?.channelTitle || demoChannelTitle
}
{/* <CheckCircle  sx = {{fontSize:12,color:"gray",ml:"5px"}} /> */}
<CheckCircleIcon  />
</Typography>

</Link>


  </Card>
  
  
  </>
  )
}

export default VideoCard
