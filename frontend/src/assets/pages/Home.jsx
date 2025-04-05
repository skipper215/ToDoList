import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home() {
    const movies = [
        {id: 1, title: "John Wick", releaseDate: "2023"},
        {id: 2, title: "Smurfs", releaseDate: "2013"},
        {id: 3, title: "The Avengers", releaseDate: "2022"}
    ]

    const [searchQuery, setSearchQuery] = useState("") 
    //searchQuery is the state 
    // setSearchQuery changes state 
    
    const handleSearch = (e) => {
        e.preventDefault() //prevents default refresh of page 
        alert(searchQuery)
        setSearchQuery("") //sets to empty after search
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