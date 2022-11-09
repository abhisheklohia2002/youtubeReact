import axios from "axios"
// const BASE_URL = `https://youtube138.p.rapidapi.com`

const BASE_URL = `https://youtube.googleapis.com/youtube/v3/`
// const options = {
//     // method: 'GET',
//     // url: 'https://youtube138.p.rapidapi.com/auto-complete/',
//     params: {maxResults :"50"},
//     headers: {
//       'X-RapidAPI-Key': '57456444ebmsh67a445b74ef7769p10677fjsn532d2dd27d28',
//       'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
//     }
//   };



// var api_key = "AIzaSyDCX3r9SN6bjIa3UXri9WbWqlDuf9SNcSk";
// var data =  `https://youtube.googleapis.com/youtube/v3/search?part=%20snippet&maxResults=20&q=${Info}&key=${api_key}`;



export const fetchApi = async (url)=>{
const response =  await axios.get(BASE_URL+url);
// console.log(response,"k")
return response;

}


// axios.request(options).then(function (response) {
// 	console.log(response.data,"h");
// }).catch(function (error) {
// 	console.error(error);
// });