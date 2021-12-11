import { useState, useEffect } from "react";

function VideoPlayer(props) {
  return (
    <div style={{display:"flex"}} >
      <iframe 
        width="420"
        height="315"
        src={`https://www.youtube.com/embed/${props.query}`
     } frameBorder="0" allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
