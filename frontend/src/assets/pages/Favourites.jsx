import "../../css/Favorites.css"
import { useMovieContext } from "../../contexts/MovieContext"
import MovieCard from "../../components/MovieCard"

function Favourites() {
    const {favourites} = useMovieContext() //grabs fav array from MovieContext

    if(favourites) { //display
        return (
            <div className="movies-grid">
            {favourites.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
            </div>
        )
    }

    return <div className='favourites-empty'>
        <h2>No Favourite Movies Yet</h2>
        <p> Start adding movies to your favourites and they will appear here!</p>
    </div>
}

export default Favourites