import axios from "../../axios";
import YouTube from "react-youtube";
import React, { useEffect, useState } from "react";
import "./RowPost.css";
import { MdChevronLeft,MdChevronRight} from 'react-icons/md'
import { API_KEY, imageUrl } from "../../Constant/Constant";
function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios
      .get(props.urls)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
  console.log("3d333",movies);

      })
      .catch((err) => {
        // alert("network error");
      });
  }, []);
  console.log("3333",movies);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      close:1,
    },
  };
  const handelMovies = (id) => {
    console.log("@@@@@@@@", id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
        console.log("#####", response.data.results);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("empty array");
        }
      });
  };
const sliderLeft=()=>{
  var slider = document.getElementById('slider'+props.id);
  slider.scrollLeft = slider.scrollLeft-500;
  
  
};
const sliderRight=()=>{
  var slider= document.getElementById('slider'+props.id);
  slider.scrollLeft = slider.scrollLeft +500;

};

  return (
    <div className="row">
      <h2 className="title">{props.title}</h2>
<div className="symbol">
       
      <div className="posters" id={'slider'+props.id}>

        {movies.map((obj,id) => (
          <>
           <div className="dis">
            <p className="pss" key={id}>{obj.backdrop_path ?obj.original_title:''} </p> 
            </div>
          <img
            onClick={() => handelMovies(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageUrl + obj.backdrop_path }`}
            alt={obj.original_title}
            />

           
            </>
            ))}
       <MdChevronLeft className="left"  onClick={sliderLeft} size={30} style={{left:'40px',top:'85px',backgroundColor:'white',opacity:0.2,borderRadius:'130px',color:'black',position:'absolute',cursor:'pointer',}}/>

       <MdChevronRight className="right" onClick={sliderRight} className="right" size={30} style={{backgroundColor:'white',opacity:0.2,borderRadius:'130px',color:'black',position:'absolute',cursor:'pointer',right:'0px',marginTop:'50px'}}  />
      </div>
       </div>

        

     {urlId && <YouTube videoId={urlId.key} opts={opts} />}
     </div>
     );
    }
    
export default RowPost;
