
function Track({data, clickHandler, actionBtn}) {
    return (
        <div className="track">
            <div className="info">
            <h3>{data.name}</h3>
            <p>{data.artist} - {data.album}</p>
            </div>
            <div className="action">
                <button data-id={data.id} onClick={clickHandler}>{actionBtn}</button>
            </div>
        </div>
    )
}

export default Track;