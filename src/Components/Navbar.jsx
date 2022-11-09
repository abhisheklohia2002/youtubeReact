import React from 'react'
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
// import { logo } from '../utilis/Constants';
const Navbar = () => {
  return (
   <>
   <Stack direction = "row" alignItems="center" p = {2} 
   sx = {{position:"sticky",background:"#000",top:"0",justifyContent:"space-between"}} 
   >

    <Link to = "/" style= {{display : "flex",alignItems:"center"}
}>

<img src="https://i.ibb.co/s9Qys2j/logo.png"  alt = "logo" height={45}  />


</Link>

<SearchBar/>



   </Stack>
   
   </>
  )
}

export default Navbar
