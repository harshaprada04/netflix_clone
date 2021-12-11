
import {useState,useEffect} from "react";
import HomePageList from "./HomePageList";

function HomePage(props){
 const[movieList,setMovieList]=useState([])
useEffect(()=>{
    fetch(props.fetechURL).then((res)=>res.json().then((data)=>{
    setMovieList(data.results)
    }))
},[props.fetechURL]
)

    
//console.log(movieList)
    return(
        <div>
        {props.title}
        <HomePageList movieList={movieList} isOriginal={props.isOriginal}/>
        </div>
    )
}

export default HomePage;