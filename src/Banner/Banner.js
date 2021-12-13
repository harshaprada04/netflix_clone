import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import MyList from "../Page/MyList";
import "./banner.css";

function Banner(props) {
  const [movies, setMovies] = useState([]);
  const navigation=useNavigate();
  useEffect(() => {
    fetch(props.fetechURL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(
          data.results[Math.floor(Math.random() * data.results.length - 1)]
        );
      });
  }, [props.fetechURL]);
  function truncate(str,n){
     return str?.length>n? str.substr(0,n-1) +"..." :str;
  }
  return (
    <div className="banner">
    <div className="banner-content">
      <h2 className="banner_title">{movies.name?movies.name:movies.original_title}</h2>
      <button className="banner_button">Play</button>
      <button className="banner_button" onClick={()=>{navigation("/mylist")}}>My List</button>
      <p className="banner_description">{truncate(movies.overview,150)}</p>
      </div>
      <img className= "poster" src={`http://image.tmdb.org/t/p/original//${movies.backdrop_path}`} alt="Movie_Poster"/> 
      </div>
    
  );
}

export default Banner;
