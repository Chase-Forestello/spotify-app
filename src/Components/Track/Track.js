import React from "react";
import "./Track.css";

function Track(props) {
  const name = props.track.name;
  
  function addTrack() {
    this.props.onAdd(props.track);
  }
  
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      <button className="Track-action" onClick={addTrack}>
        {/*<!-- + or - will go here -->*/}
        {props.isRemoval ? "-" : "+"}
      </button>
    </div>
  );
}

export default Track;
