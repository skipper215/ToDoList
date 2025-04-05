import MovieCard from "../../components/MovieCard"
import {searchMovies, getPopularMovies, getTopRated, getUpcoming} from "../../services/api"
import "../../css/Home.css"
import { useState, useEffect } from "react";

function Home() {
    

    const [searchQuery, setSearchQuery] = useState("") 
    //searchQuery is the state 
    // setSearchQuery changes state 
    const [movies, setMovies] = useState([]) //array of movies
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true) //loading is true for now

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const currMovies = await getUpcoming()
                setMovies(currMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...")
            }
            finally {
                setLoading(false) 
            }
        }

        loadMovies()
    }, [])
    
    const handleSearch = async (e) => {
        e.preventDefault() //prevents default refresh of page 
        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch(err) {
            console.log(err)
        } finally {
            setLoading(false)
        }


        //setSearchQuery("") //sets to empty after search
    }

    return <div className="home">

        <form onSubmit={handleSearch} className="search-form">
            <input type="text"
                    placeholder="Search for movies..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} // changes state of text input
            />
            <button type="submit" className="search-button"> Search </button>
        </form>

        <div className="movies-grid">
            {movies.map(
                (movie) => 
                    movie.title.toLowerCase().startsWith(searchQuery) && 
                    (<MovieCard movie={movie} key={movie.id} />)
                )
            }
        </div>
    </div>
}

export default Home