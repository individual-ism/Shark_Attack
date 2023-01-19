import React from "react"
import { NavLink } from "react-router-dom"
import '../App.css'

export default function Nav() {
    return (
        <nav className="navLinkCollection">
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to="/sharkattacks">Shark Attacks</NavLink>
            <NavLink className="navlink" to="/newsharkattack">New Record</NavLink>
        </nav>
    )
}