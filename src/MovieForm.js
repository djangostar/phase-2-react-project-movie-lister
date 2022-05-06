import React, { useState } from "react"
import "./stylesheets/MovieForm.css"

const MovieForm = ({ onAddNewMovie }) => {
    const [title, setTitle] = useState("")
    const [director, setDirector] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [synopsis, setSynopsis] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                director: director,
                imgUrl: imgUrl,
                synopsis: synopsis,
            }),
        })
        .then((res) => res.json())
        .then((newMovie) => onAddNewMovie(newMovie))
    }

    return (
        <div className="ui inverted segment form">
            <h1 className="h1-title" style={{ textAlign: "center" }}>
                 Add A Movie!!!{" "}
            </h1>
            <hr/>
            <form onSubmit={handleSubmit}>
                <div className="ui input fluid">
                    <p className="form-input-labels"><strong>Add Title:</strong></p>
                    <input
                        className="input-text"
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={title}
                    />
                </div>
                <div className="ui input fluid">
                <p className="form-input-labels"><strong>Add Director:</strong></p>
                    <input
                        className="input-text"
                        onChange={(e) => setDirector(e.target.value)}
                        type="text"
                        name="director"
                        placeholder="Director"
                        value={director}
                    />
                </div>
                <div className="ui input fluid">
                <p className="form-input-labels"><strong>Add Image:</strong></p>
                    <input
                        className="input-text"
                        onChange={(e) => setImgUrl(e.target.value)}
                        type="text"
                        name="image"
                        placeholder="Image Url"
                        value={imgUrl}
                    />
                </div>
                <div className="ui input fluid synopsi">
                <p className="form-input-labels"><strong>Add Synopsis:</strong></p>
                    <label>
                        <textarea
                         className="synopsis" 
                         onChange={(e) => setSynopsis(e.target.value)}
                         nmae="synopsis"
                         placeholder="Synopsis" 
                         value={synopsis} 
                        />
                    </label>
                </div>
                <button className="ui button" type="submit">
                    Submit Movie
                </button>
            </form>
        </div>
    )
}

export default MovieForm