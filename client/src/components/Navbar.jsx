import { NavLink } from "react-router-dom"
import "./Navbar.css"


export default function Navbar() {
    return (

        <>
        <header>
            <div className="container">
                <div className="logo-brand">
                    <NavLink to="/">Krish</NavLink>
                </div>

                <nav>
                    <ul>
                        <li> <NavLink to="/">Home</NavLink> </li>
                        <li> <NavLink to="/service">Service</NavLink> </li>
                        <li> <NavLink to="/about">About</NavLink> </li>
                        <li> <NavLink to="/contact">Contact</NavLink> </li>
                        <li> <NavLink to="/login">login</NavLink> </li>
                        <li> <NavLink to="/register">register</NavLink> </li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    )
}