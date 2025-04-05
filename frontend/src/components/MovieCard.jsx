
import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"

function MovieCard({movie}) {
    const {isFavourite, addToFavourites, removeFromFavourites} = useMovieContext()
    const favourite = isFavourite(movie.id)


    function favClick(e) { //fav, unfav
        e.preventDefault()
        if (favourite) removeFromFavourites(movie.id)
        else addToFavourites(movie)
    }

    return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favourite ? "active" : ""}`} onClick={favClick}>
                        ♥     
                    </button> 

                </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
    )
}

export default MovieCard