import {createContext, useState, useContext, useEffect} from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favourites, setFavourites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favourites")

        if(storedFavs) setFavourites(JSON.parse(storedFavs)) //if stored favs, convert them from JSON string to normal array
    }, [])

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites)) // convert array to string and set to local storage
    }, [favourites]) //only runs if there is a change in the favourites array (adding, deleting)


    const addToFavourites = (movie) => {
        setFavourites(prev => [...prev, movie]) 
        // prev = current state of the array holding favs
        // [...prev, movie] is the order we want to set the favs array
    }

    const removeFromFavourites = (movieId) => {
        setFavourites(prev => prev.filter(movie => movie.id !== movieId))
        // .filter : if true, stays in new array. else, exclude
    }

    const isFavourite = (movieId) => {
        return favourites.some(movie => movie.id === movieId)
        //some() is an array method returns true if any element passes the conditional
    }

    const value = {
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite
    }

    return <MovieContext.Provider value={value}> 
        {children}
    </MovieContext.Provider>
    // all children and access the values component
}