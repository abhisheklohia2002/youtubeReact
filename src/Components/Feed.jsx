import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect } from 'react'
import Sidebar from '../Sidebar'
import Videos from './Videos';
import axios from "axios"
// import { fetchApi } from '../FetchfromApi';
import { useState } from 'react';
const Feed = () => {

const [selectedCategory,setselectedCategory] = useState("New")
const [videos,setvideos]  = useState([])
const BASE_URL = `https://youtube.googleapis.com/youtube/v3/`


useEffect(()=>{

fetchApi(`search?part=%20snippet&maxResults=25&q=${selectedCategory}&key=AIzaSyDCX3r9SN6bjIa3UXri9WbWqlDuf9SNcSk`);


},[selectedCategory])
const fetchApi = async (url)=>{
  const response =  await axios.get(BASE_URL+url);
  // console.log(response,"k")
  setvideos(response.data.items);

  return response;
}
return (
   <Stack sx = {{flexDirection:{sx:"column",md:"row"}}}>
<Box sx = {{height:{sx:"auto",md:
"92vh"},borderRight:"2px solid #3d3d3d",px:{sx:0,md:2}}}>
<Sidebar

selectedCategory = {selectedCategory} setselectedCategory= {setselectedCategory}

/>


<Typography    className = "copyright" variant='body2' sx = {{mt:1.5,color:"#fff"}}>
  Copyright 2022
</Typography>
</Box>


<Box p = {2} sx = {{overflowY:"auto",height:"90vh",flex:"2"}} >
<Typography variant='h4' fontWeight="bold" mb = {2} sx = {{color:"white"}}>
 {selectedCategory}
 <span style = {{color:"#F31503"}}>
Videos
 </span>

</Typography>

<Videos videos = {videos}  />
</Box>
   </Stack>
  )
}

export default Feed
