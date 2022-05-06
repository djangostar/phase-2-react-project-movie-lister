import React from "react"
import "./stylesheets/About.css"

const About =  () => {
    return (
        <div>
            <h1 className="about-me">About The Author</h1>
            <hr/>
            <h2 className="about-project">This project was done over the course of three days using React, JSX, HTML and CSS!</h2>
            <br/>
            <h2 className="about-project">Here's a link to the source code in my GitHub page and keep checking back every once in a while as I enhance the functionality of the App!</h2>
        </div>
    )
}

export default About