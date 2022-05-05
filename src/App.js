import React, { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import './stylesheets/App.css';
import Home from "./Home"
import Movies from "./Movies"
import Movie from "./Movie"
import MovieForm from "./MovieForm"
import About from "./About"
import NavBar from "./NavBar"
import BackGround from "./background-image.png"


const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
      fetch("http://localhost:3001/movies")
        .then((res) => res.json())
        .then(data => {
          setMovies(data)
         })
  }, [])

  const navigate = useNavigate()

  const handleAddNewMovie = (newMovie) => {
      setMovies([...movies, newMovie])
      navigate("/movies")
  }
  
  const handleDeleteMovie = (id) => {
    const updatedMovieList = movies.filter((movie) => movie.id !== parseInt(id, 10))
    setMovies(updatedMovieList)
    navigate("/movies")
  }

  return (
    <div className="App" style={{backgroundImage: `url(${BackGround})`}}>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies movies={movies} />} />
          <Route path="/movies/new" element={<MovieForm  onAddNewMovie={handleAddNewMovie}/>} />
          <Route path="/movies/:id" element={<Movie onDeleteMovie={handleDeleteMovie}/>} />
          <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App;