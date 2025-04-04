const API_KEY = "9654cc8c010ddcf59930b29ae187e3c5"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results //results holds the data 
}

export const getTopRated = async () => {
    const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results //results holds the data 
}

export const getUpcoming = async () => {
    const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results //results holds the data 
}
export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await response.json()
    return data.results //results holds the data 
}
