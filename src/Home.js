import React from "react"
import "./stylesheets/Home.css"
import img from "./huh.png"

const Home = () => {
    return (
        <div>
            <h1 className="home">My Movie List</h1>
            <hr/>
            <h3 className="welcome"> Welcome To Movie-Lister! </h3>
            <div>
                <img 
                 src={img} 
                 alt="huh?" 
                 className="center" 
                 height={375}
                 width={525}
                /> 
            </div>
            <div>
                <p>
                    <strong>To get started, use the Navigation bar at the top.</strong>
                </p>
                <p>
                    <strong>Add or delete movies to your list! Simple, yet efficient way to keep track of your movies!</strong>
                </p>
            </div>
        </div>

    )
}

export default Home
