import React from "react"
import "./stylesheets/Movies.css"
import { Link } from "react-router-dom"




const Movies = ({ movies }) => {
    

    const moviesList = movies.map((movie) => (
        <div key={movie.id}>
        <Link className="movies-link" to={`/movies/${movie.id}`} >
            <li><strong>{movie.title}</strong></li>
        </Link>
        </div>
        
    ))

    return (
        <div>
            <h1 className="movies">My Movies</h1>
            <hr/>
            <h2 className="titles">Titles</h2>
            {moviesList}
            <br/>
            {/* <AddMovieBttn onAddNewMovie={handleAddNewMovie}/> */}
        </div>
    )
}

export default Movies