import { Stack } from '@mui/system'
import React from 'react'
// import { categories } from './utilis/Constants'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';



// const selectedCategory = "New";



const Sidebar = ({selectedCategory,setselectedCategory}) => {

    const categories = [
          { name: 'New', icon: <HomeIcon/>, },
          { name: 'JS Mastery', icon: <CodeIcon/>, },
          { name: 'Coding', icon: <CodeIcon /> },
          { name: 'ReactJS', icon: <CodeIcon /> },
          { name: 'NextJS', icon: <CodeIcon /> },
          { name: 'Music', icon: <MusicNoteIcon /> },
          { name: 'Education', icon: <SchoolIcon />, },
          { name: 'Podcast', icon: <GraphicEqIcon />, },
          { name: 'Movie', icon: <OndemandVideoIcon />, },
          { name: 'Gaming', icon: <SportsEsportsIcon />, },
          { name: 'Live', icon: <LiveTvIcon/>, },
          { name: 'Sport', icon: <FitnessCenterIcon />, },
          { name: 'Fashion', icon: <CheckroomIcon />, },
          { name: 'Beauty', icon: <FaceRetouchingNaturalIcon/>, },
          { name: 'Comedy', icon: <TheaterComedyIcon />, },
          { name: 'Gym', icon: <FitnessCenterIcon />, },
          { name: 'Crypto', icon: <DeveloperModeIcon />, },
        ];





  return (
   <>
   <Stack direction = "row" gap = {1} sx = {{overflowY:"auto",height:{sx:"auto",md:"95%"},flexDirection:{md:"column"},marginRight:"1vw"}}>

{
    categories.map((category)=>(

        <button className = "category-btn" 
        onClick = {()=>setselectedCategory(category.name)}
        style = {{background:category.name === selectedCategory && "#FC1503",color:"white"}}
        key = {category.name}
        >
    <span style = {{color :category.name === selectedCategory ? "white":"red",marginRight:"15px"}}>
{category.icon}
    </span>
    <span style= {{opacity :category.name === selectedCategory? "1" :'0.9',color :"black"}}>

{category.name}
    </span>
    <span>

    </span>
</button>
    ))
}

   </Stack>
   
   
   </>
  )
}

export default Sidebar
