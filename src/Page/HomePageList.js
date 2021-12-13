import HomePageListItem from "./HomePageListItem";
import "./HomePageListItem.css";


function HomePageList(props){  
    console.log(props.movieList)
    return(
      <div>
      {props.isMyList? props.title :""}
        <div className="movieLists">
        {props.movieList.map((data)=>(
          <HomePageListItem
          poster_path={data.poster_path}
          backdrop_path={data.backdrop_path}
          image={props.isOriginal?data.poster_path:data.backdrop_path}
          original_title={data? data.name : data.original_title}
          name={data.name}
          original_title={data.original_title}
          id={data.id}
          key={data.id} 
          isOriginal={props.isOriginal}
          overview={data.overview}
          vote_average={data.vote_average}/>
        ))}
        </div>
        </div>
    )

}
export default HomePageList;