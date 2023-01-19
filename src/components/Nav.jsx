import React from "react"
import { NavLink } from "react-router-dom"
import "../Nav.css"

export default function Nav() {
    return (
        <nav>
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to="/sharkattacks">Shark Attacks</NavLink>
            <NavLink className="navlink" to="/newsharkattack">New Record</NavLink>
        </nav>
    )
}