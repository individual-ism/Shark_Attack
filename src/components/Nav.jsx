import React from "react"
import { NavLink } from "react-router-dom"
import "../Nav.css"

export default function Nav() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/sharkattacks">Shark Attacks</NavLink>
            <NavLink to="/newsharkattack">New Record</NavLink>
        </nav>
    )
}