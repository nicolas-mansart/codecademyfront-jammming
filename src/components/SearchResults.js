import Tracklist from "./Tracklist";


function SearchResults({data, clickHandler}) {
    return (
        <div className="column">
            <h2>Results</h2>
            <Tracklist tracks={data} clickHandler={clickHandler} actionBtn="+"></Tracklist>
        </div>
    )
}

export default SearchResults;