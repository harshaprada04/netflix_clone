import Context from "./Context/Context";
import {useContext} from "react";
import HomePageList from "./HomePageList";
import "./myList.css"


function MyList(){
    const listContext=useContext(Context);
    return(
        <div className="list">
        <HomePageList title="My List" movieList={listContext.favorite} isMyList /> 
        </div>
    )
}
export default MyList;