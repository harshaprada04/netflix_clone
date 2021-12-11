import "./card.css";
import Context from "./Context/Context";
import { useContext, useState, useEffect } from "react";
import Video from "./Video";

function Card(props) {
  const [id, setId] = useState();
  const [keyList, setKeyList] = useState([]);

  const listContext = useContext(Context);
  const inList = listContext.isInList(props.id);

  function clickHandler() {
      
    if (inList) {
      listContext.removeListHandler(props.id);
    } else {
      listContext.listHandler({
        poster_path: props.poster_path,
        backdrop_path: props.backdrop_path,
        title: props.title_original,
        name: props.name,
        id: props.id,
        isOriginal: props.isOriginal,
      });
    }
  }
  function playHandler() {
   return setId(props.id);
  }
  useEffect(() => {
    fetch(
        `https://api.themoviedb.org/3/${props.isOriginal? "tv": "movie"}/${id}/videos?api_key=8df5aee02940e0a72a9c36ff18f0a5c2`
      ).then((res) =>
      res.json().then((data) => {
        return setKeyList(data.results);
      })
    );
  }, [id]);
  console.log(props.id)
  return (
    <div className="card">
      <h2 className="list_name">
        {props.name ? props.name : props.title}
        
        <span>{props.vote}</span>
      </h2>
      <h3 className="list_overview">{props.overview}</h3>
      <button className="play_button" onClick={playHandler}>
        Play
      </button>
      <button className="list_button" onClick={clickHandler}>
        {inList ? "X" : "+"}
      </button>
      {keyList && <Video keyList={keyList} />}
    </div>
  );
}

export default Card;
