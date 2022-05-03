import React from "react"
import { Link } from "react-router-dom"


const AddMovieBttn = ({ onAddNewMovie }) => {
    return (
        <Link to={"/movies/new"}>
            <button onClick={onAddNewMovie}>Add Movie</button>
        </Link>
    )
}

export default AddMovieBttn