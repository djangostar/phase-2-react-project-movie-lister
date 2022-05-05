import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import AddMovieBttn from "./AddMovieBttn"


const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/movies")
            .then((res) => res.json())
            .then(data => {
                setMovies(data)
            })
    }, [])

    const handleAddNewMovie = (newMovie) => {
        setMovies([...movies, newMovie])
    }

    const moviesList = movies.map((movie) => (
        <div key={movie.id}>
        <Link to={`/movie/${movie.id}`} >
            <label><strong>{movie.title}</strong></label>
            <br/>
        </Link>
        </div>
        
    ))

    return (
        <div>
            <h1>My Movies</h1>
            <hr/>
            <h3>Titles</h3>
            {moviesList}
            <br/>
            <AddMovieBttn onAddNewMovie={handleAddNewMovie}/>
        </div>
    )
}

export default Movies