import Track from "./Track";

function Tracklist({tracks, clickHandler, actionBtn}) {
    let trackElts = tracks.map((item) => (<Track data={item} clickHandler={clickHandler} actionBtn="-"></Track>))
    return (
        <div className="tracklist">
            {trackElts}
        </div>
    )
}

export default Tracklist;