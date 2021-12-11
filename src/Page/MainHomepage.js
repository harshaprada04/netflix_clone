import HomePage from "./Homepage";
import requests from "../request";
import Banner from "../Banner/Banner";

function MainHomePage(){
    return(
        <div>
        <Banner fetechURL={requests.netflix_original}/>
        <HomePage title="Netflix Original" fetechURL={requests.netflix_original} isOriginal/> 
        <HomePage title="Trending Now" fetechURL={requests.trending}/> 
        <HomePage title="Top Rated" fetechURL={requests.toprated}/> 
        <HomePage title="Adventure Movies" fetechURL={requests.adventure}/> 
        <HomePage title="Comedy Movies" fetechURL={requests.comedy}/> 
        <HomePage title="War Movies" fetechURL={requests.war}/> 
        <HomePage title="Action Movies" fetechURL={requests.action}/>
        <HomePage title="Horror Movies" fetechURL={requests.horror}/>
        </div>
    )
}
export default MainHomePage;