import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Movie =({onDeleteMovie}) => {
    const [movie, setMovie] = useState([])
    const { id } = useParams();  
    
    useEffect(() => {
        fetch(`http://localhost:3001/movies/${id}`)
            .then((res) => res.json())
            .then(data => {
                setMovie(data)
            })
    }, [id])

    const handleDeleteClick = () => {
        fetch(`http://localhost:3001/movies/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(() => onDeleteMovie(id))
    }

    return (
        <div key={movie.id}>
            <h3>Title: {movie.title}</h3>
            <h3>Director: {movie.director}</h3>
            <h3>Poster: </h3><img src={movie.imgUrl} alt="poster"/>
            <h3>Synopsis: {movie.synopsis}</h3>
            <button className="delete" onClick={handleDeleteClick}>Delete From List</button> 
        </div>
    )
}

export default Movie