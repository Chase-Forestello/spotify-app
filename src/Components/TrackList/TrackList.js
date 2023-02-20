import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

function TrackList(props) {
  console.log(props.isRemoval);
  return (
    <div className="TrackList">
      {/* <!-- You will add a map method that renders a set of Track components  --> */}
      {props.tracks.map((track) => {
        return <Track track={track} key={track.id} onAdd={props.onAdd} isRemoval={props.isRemoval}  />;
      })}
    </div>
  );
}

export default TrackList;
