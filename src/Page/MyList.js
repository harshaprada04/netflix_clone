import Context from "./Context/Context";
import {useContext} from "react";
import HomePageList from "./HomePageList";
import "./myList.css"


function MyList(){
    const listContext=useContext(Context);
    console.log(listContext.listSize)   
   
        return(
            <div className="list">
           {listContext.listSize===0 ? <p>Add Content to My List......</p>:<HomePageList title="My List" movieList={listContext.favorite} isMyList />    }
            </div>
        ) 
}
export default MyList;