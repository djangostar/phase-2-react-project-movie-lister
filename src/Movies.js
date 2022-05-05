import React from "react"
import "./stylesheets/Movies.css"
import { Link } from "react-router-dom"




const Movies = ({ movies }) => {
    

    const moviesList = movies.map((movie) => (
        <div className="Movies-link" key={movie.id}>
        <Link to={`/movies/${movie.id}`} >
            <li><strong className="Movies-link">{movie.title}</strong></li>
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
            {/* <AddMovieBttn onAddNewMovie={handleAddNewMovie}/> */}
        </div>
    )
}

export default Movies