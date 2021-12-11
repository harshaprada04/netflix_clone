import HomePageListItem from "./HomePageListItem";
import "./HomePageListItem.css";


function HomePageList(props){  
    console.log(props.movieList)
    return(
        <div className="movieLists">
        <h2 className="list_title">{props.isMyList? props.title :""}</h2>
        {props.movieList.map((data)=>(
          <HomePageListItem
          poster_path={data.poster_path}
          backdrop_path={data.backdrop_path}
          image={props.isOriginal?data.poster_path:data.backdrop_path}
          title={data? data.name : data.original_title}
          name={data.name}
          title_original={data.original_title}
          id={data.id}
          key={data.id} 
          isOriginal={props.isOriginal}
          overview={data.overview}
          vote={data.vote_average}/>
        ))}
        </div>
    )

}
export default HomePageList;