import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Movie = () => {
    const [movie, setMovie] = useState([])
    const { id } = useParams();  
    
    useEffect(() => {
        fetch(`http://localhost:3001/movies/${id}`)
            .then((res) => res.json())
            .then(data => {
                setMovie(data)
            })
    }, [id])

    return (
        <div key={id}>
            <h3>Title: {movie.title}</h3>
            <h3>Director: {movie.director}</h3>
            <h3>Poster: </h3><img src={movie.imgUrl} />
            <h3>Synopsis: {movie.synopsis}</h3>
            <button className="delete">Delete From List</button>
        </div>
    )
}

export default Movie