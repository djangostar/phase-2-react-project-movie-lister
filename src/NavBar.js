import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        style={({ isActive }) => ({
            display: "inline-block",
            width: "50px",
            padding: "12px",
            margin: "0 6px 6px",
            background: isActive ? "blue" : "darkblue",
            textDecoration: "none",
            color: "white"
        })}
        className={({isActive}) => `nav_link${isActive ? " active" : ""}`}
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        style={({ isActive }) => ({
            display: "inline-block",
            width: "50px",
            padding: "12px",
            margin: "0 6px 6px",
            background: isActive ? "blue" : "darkblue",
            textDecoration: "none",
            color: "white"
        })}
        className={({isActive}) => `nav_link${isActive ? " active" : ""}`}
        end
      >
        Movies
      </NavLink>
      <NavLink
        to="/movies/new"
        style={({ isActive }) => ({
            display: "inline-block",
            width: "95px",
            padding: "12px",
            margin: "0 6px 6px",
            background: isActive ? "blue" : "darkblue",
            textDecoration: "none",
            color: "white"
        })}
        className={({isActive}) => `nav_link${isActive ? " active" : ""}`}
        end
      >
        Movie Form
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({
            display: "inline-block",
            width: "50px",
            padding: "12px",
            margin: "0 6px 6px",
            background: isActive ? "blue" : "darkblue",
            textDecoration: "none",
            color: "white"
        })}
        className={({isActive}) => `nav_link${isActive ? " active" : ""}`}
        end
      >
        About
      </NavLink>
    
    </div>
  );
}

export default NavBar