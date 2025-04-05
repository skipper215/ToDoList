import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './assets/pages/Home'
import Favourites from './assets/pages/Favourites'
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar'

function App() {

  return (
    <div> 
    <NavBar />
    
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </main>
    </div>
  )

}

export default App
