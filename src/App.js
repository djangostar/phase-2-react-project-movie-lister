import React from "react"
import { Route, Routes} from "react-router-dom"
import './App.css';
import Home from "./Home"
import Movies from "./Movies"
import Movie from "./Movie"
import MovieForm from "./MovieForm"
import About from "./About"
import NavBar from "./NavBar"


const App = () => {
  

  return (
    
    <div className="App">
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/new" element={<MovieForm />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App;
