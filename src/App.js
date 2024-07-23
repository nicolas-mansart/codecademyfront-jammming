import { useEffect, useState } from 'react';
import './App.css';
import MockData from './MockData';
import Playlist from './components/Playlist';
import './components/SearchBar'
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  const [searchResultData, setSearchResultData] = useState([]);
  const [playlistData, setPlaylistData] = useState([]);
  const [playlistTitle, setPlaylistTitle] = useState('Playlist Title')

  useEffect(() => {
    setSearchResultData(MockData);
  }, [searchResultData, playlistData])

  function addToPlaylist(e) {
    let itemId = e.target.getAttribute('data-id')
    console.log("adding to playlist", itemId);
    let elt = searchResultData.find((item) => item.id === itemId);
    let inPlaylist = playlistData.some((item) => item.id === itemId);
    if(inPlaylist)
      console.log('item already in playlist')
    else if(!elt) {
      console.log('item not found')
    }
    else {
      setPlaylistData((prev) => [
        ...prev,
        elt
      ])
    }
  }
  function removeFromPlaylist(e) {
    let itemId = e.target.getAttribute('data-id')
    console.log("removing from playlist:", e.target)
    setPlaylistData((prev) => prev.filter((item) => item.id !== itemId))
  }

  function changePlaylistTitle(e) {
    setPlaylistTitle(e.target.value);
  }
  return (
    <div className="App">
      <header>
        Jammming
        <SearchBar></SearchBar>
      </header>
      <div className='columns'>
        <SearchResults data={searchResultData} clickHandler={addToPlaylist}></SearchResults>
        <Playlist
          title={playlistTitle}
          data={playlistData}
          clickHandler={removeFromPlaylist}
          titleChangeHandler={changePlaylistTitle}
        ></Playlist>
      </div>
    </div>
  );
}

export default App;
