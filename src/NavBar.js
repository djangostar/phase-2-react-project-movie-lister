import React from "react";
import "./stylesheets/NavBar.css"
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <NavLink
        to="/"
        style={({ isActive }) => ({
            fontSize: "30px",
            display: "inline-block",
            width: "100px",
            padding: "12px",
            margin: "0 6px 6px",
            background: "none",
            textDecoration: "blink",
            color: isActive ? "darkred" : "white",
            
        })}
        className={({isActive}) => `nav_link${isActive ? " active" : ""}`}
        end
      >
        Home
      </NavLink>
      <NavLink 
        to="/movies" 
          style={({ isActive }) => ({
            fontSize: "30px",
            display: "inline-block",
            width: "110px",
            padding: "12px",
            margin: "0 6px 6px",
            background: "none",
            textDecoration: "blink",
            color: isActive ? "darkred" : "white",
            border: "1 px"
      })}
      className={({isActive}) => `nav_link${isActive ? " active" : ""}`}
      end
      >
        Movies
      </NavLink>
      <NavLink
        to="/movies/new"
        style={({ isActive }) => ({
          fontSize: "30px",
          display: "inline-block",
          width: "160px",
          padding: "12px",
          margin: "0 6px 6px",
          background: "none",
          textDecoration: "blink",
          color: isActive ? "darkred" : "white",
          border: "1 px"
      })}
      className={({isActive}) => `nav_link${isActive ? " active" : ""}`}
      end
      >
        Add Movie
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          fontSize: "30px",
          display: "inline-block",
          width: "100px",
          padding: "12px",
          margin: "0 6px 6px",
          background: "none",
          textDecoration: "blink",
          color: isActive ? "darkred" : "white",
          border: "1 px"
      })}
      className={({isActive}) => `nav_link${isActive ? " active" : ""}`}
      end
      >
        About
      </NavLink>
      <hr/>
    </div>

  );
}

export default NavBar