import Tracklist from "./Tracklist";


function Playlist({title, data, clickHandler, titleChangeHandler}) {
    return (
        <div className="column">
            
            <input type="text" placeholder="Playlist title" onChange={titleChangeHandler} value={title} />
            <Tracklist tracks={data} clickHandler={clickHandler} actionBtn="-"></Tracklist>
        </div>
    )
}

export default Playlist;