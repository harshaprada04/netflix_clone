import Card from "./Card";
import "./HomePageListItem.css";
import { useState } from "react";

function HomePageListItem(props) {
  const [state, setstate] = useState(false);
  function eventHandeler() {
    setstate(true);
  }
  function eventLeaveHandler() {
    setstate(false);
  }
 

  return (
    <div onMouseLeave={eventLeaveHandler}>
      <img
        className={`movieList ${props.isOriginal && "movieListOriginal"}`}
        src={`http://image.tmdb.org/t/p/original//${props.image}`}
        alt="content_is_temporarily_unavaliable"
        onMouseEnter={eventHandeler}
      />
      {state ? (
        <Card
          poster_path={props.poster_path}
          backdrop_path={props.backdrop_path}
          title={props.title_original}
          name={props.name}
          key={props.id}
          id={props.id}
          isOriginal={props.isOriginal}
          vote={props.vote}
          overview={props.overview}
          isOriginal={props.isOriginal}
        >
          {" "}
          <HomePageListItem />{" "}
        </Card>
      ) : (
        ""
      )}
    </div>
  );
}

export default HomePageListItem;
