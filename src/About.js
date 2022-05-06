import React from "react"
import "./stylesheets/About.css"

const About =  () => {
    return (
        <div>
            <h1 className="about-me">About The Author</h1>
            <hr/>
                <h2 className="about-project">This project was done over the course of three days using React, JSX, HTML and CSS!</h2>
            <br/>
                <a className="github-link" href="https://github.com/djangostar/phase-2-react-project-movie-lister.git"><h2 className="about-project">Here's a link to the source code in my GitHub page and keep checking back every once in a while as I enhance the functionality of the App!</h2></a>
            <br/>
            <div>
                <h2>Special Thanks to: </h2>
                    <ul className="thank-you-list">
                        <li>
                            Dylan Dupasquier: For taking the time to debug with me and teaching me some nifty tricks!
                        </li>
                        <li>
                            To my Wife: For always believing in me when I didn't have the strenght to believe in myself.
                        </li>
                        <li>
                            To Nancy Noyes: Your wisdom and complete devotion t your students is admirable
                        </li>
                    </ul>
            </div>
        </div>
    )
}

export default About