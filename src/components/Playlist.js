import Tracklist from "./Tracklist";


function Playlist({data, clickHandler}) {
    return (
        <div className="column">
            
            <input type="text" placeholder="Playlist title"/>
            <Tracklist tracks={data} clickHandler={clickHandler} actionBtn="-"></Tracklist>
        </div>
    )
}

export default Playlist;