import './App.css';
import MockData from './MockData';
import Playlist from './components/Playlist';
import './components/SearchBar'
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  let searchResultData = MockData;
  let playlistData = MockData;
  function addToPlaylist(e) {
    console.log("adding to playlist", e.target);
  }
  function removeFromPlaylist(e) {
    console.log("removing from playlist:", e.target)
  }
  return (
    <div className="App">
      <header>
        Jammming
        <SearchBar></SearchBar>
      </header>
      <div className='columns'>
        <SearchResults data={searchResultData}></SearchResults>
        <Playlist data={searchResultData}></Playlist>
      </div>
    </div>
  );
}

export default App;
