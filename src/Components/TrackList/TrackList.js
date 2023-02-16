import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

function TrackList(props) {
  console.log(props);
  return (
    <div className="TrackList">
      {/* <!-- You will add a map method that renders a set of Track components  --> */}
      {props.tracks.map((track) => {
        return (
          <Track track={track} key={track.id}
          />
        );
      })}
    </div>
  );
}

export default TrackList;
