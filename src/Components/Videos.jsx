import { Stack,Box } from '@mui/system'
import React from 'react'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
const Videos = ({videos}) => {
    // console.log(videos)
  return (
   <>
   <Stack direction = "row" flexWrap = "wrap" justifyContent="start"   gap  = {3}  >
    {
      videos.map((items,id)=>(
<Box key = {id} >
  <div style = {{}}>
{
  items.id.videoId && <VideoCard video = {items} />
  
}

  </div>
  {items.snippet.channelId && <ChannelCard ChannelDetail = {items} />}

</Box>

      ))
    }
   </Stack>
   
   </>
  )
}

export default Videos
