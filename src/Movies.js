import React from "react"
import { Link } from "react-router-dom"



const Movies = ({ movies }) => {
    

    const moviesList = movies.map((movie) => (
        <div key={movie.id}>
        <Link to={`/movies/${movie.id}`} >
            <h5><strong>{movie.title}</strong></h5>
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