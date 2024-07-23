import Track from "./Track";

function Tracklist({tracks, clickHandler, actionBtn}) {
    let trackElts = tracks.map((item) => (<Track key={item.id} data={item} clickHandler={clickHandler} actionBtn={actionBtn}></Track>))
    return (
        <div className="tracklist">
            {trackElts}
        </div>
    )
}

export default Tracklist;