import HomePage from "./Homepage";
import requests from "../request";
import "./movies.css";

function TvShow(){
    
    return(
        <div className="movie">
        <HomePage title="Netflix Original" fetechURL={requests.popular_tvshows} isOriginal/>
        <HomePage title="Popular Tv Shows" fetechURL={requests.popularity} isOriginal/>
        <HomePage title="Trending Tv Shows" fetechURL={requests.trending_tvshows} isOriginal/>
        <HomePage title="Recommended Tv Shows" fetechURL={requests.recomendation_tvshows} isOriginal/>
        <HomePage title="Crime Drama" fetechURL={requests.crime_tvshows} isOriginal/>
        </div>
    )
}
export default TvShow;