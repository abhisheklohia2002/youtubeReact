import React from 'react'
import { Paper,IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
// import {useNavigates} from "react-router-dom";

const SearchBar = () => {
    const [word,setword] = useState("")
    console.log(word)
  return (
    <>
{/* <Paper  component = "form"  sx = {{borderRadius:20,border:"1px solid #e3e3e3",pl:2,boxShadow:"none",
mr:{sm:5}}} > */}


<div style = {{margin:"auto"}}>

<input type="text" onChange={(e)=>setword(e.target.value)}   className = "search-bar" placeholder='Search...' value = {word}  name="" id="" style   = {{height:"3vw",border:"2px solid white",width :"30vw",borderRadius:10,fontSize:"1vw",paddingLeft:"1vw"}} />
<IconButton type = "submit" sx = {{p:"14px" , color:"red",position:"fixed",right:"32.5vw"}} >
  <SearchIcon/>
</IconButton>
</div>
{/* </Paper> */}
    
    
    </>
  )
}

export default SearchBar
