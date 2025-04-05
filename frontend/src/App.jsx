import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './assets/pages/Home'
import Favourites from './assets/pages/Favourites'
import {Routes, Route} from "react-router-dom"
import { MovieProvider } from './contexts/MovieContext'
import NavBar from './components/NavBar'

function App() {

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>
    
  )
  // Wrap everything in MovieProvider so they can globally use the Provider

}

export default App
