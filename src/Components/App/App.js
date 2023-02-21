import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import "./App.css";
import React, { useState } from "react";

function App(props) {
  const [searchResults, setSearchResults] = useState([
    {
      name: "name1",
      artist: "artist1",
      album: "album1",
      id: 1,
    },
  ]);

  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "name2",
      artist: "artist2",
      album: "album2",
      id: 2,
    },
  ]);

  function addTrack(track) {
    if (
      playlistTracks.find((savedTrack) => savedTrack.id === track.id)
    ) {
      return;
    }
    setPlaylistTracks({ playlistTracks: [...playlistTracks, track] });
  }

  function removeTrack(track) {
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(
        (savedTrack) => savedTrack.id !== track.id
      ),
    });
  }

  function updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  function savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri);
  }

  function search(searchTerm) {
    console.log(searchTerm);
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        {/* <!-- Add a SearchBar component --> */}
        <SearchBar />
        <div className="App-playlist">
          {/* <!-- Add a SearchResults component --> */}
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          {/* <!-- Add a Playlist component --> */}
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
