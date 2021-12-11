import "./search.css";
import HomePage from "./Homepage";

function SearchEngine(props) {
   
    const  search_bar= `https://api.themoviedb.org/3/search/movie?api_key=8df5aee02940e0a72a9c36ff18f0a5c2&query=${props.input}&include_adult=true`
 
  return (
    <div className ="search">
    {props.input ?<HomePage fetechURL={search_bar}/> :""}
    </div>
  );
}

export default SearchEngine;
