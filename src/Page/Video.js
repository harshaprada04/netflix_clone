import VideoPlayer from "./VideoPlayer";

function Video(props) {
  if (props.keyList === undefined) {
    return console.log("array is undefined");
  } else {
    return (
      <div>
        <VideoPlayer
          query={props.keyList[0]?.key}
          key={props.keyList[0]?.id}
          id={props.keyList[0]?.id}
        />
      </div>
    );
  }
}
export default Video;
