import React from "react"
import { Link } from "react-router-dom"


export const NavBar = () => {

    return (
        <nav className="navBar">
            <div className="containerFlexNav">
                <Link to="/" className="logoNav">
                    <img src="http://localhost:3333/file/logoApp.jpg" className="imgLogoNav" alt="Flowbite Logo" />
                    <span className="spanNav">Flowbite</span>
                </Link>
                <div className="divFlexNav">
                    <button type="button" className="buttonImg" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                        <span className="buttonNav">Open user menu</span>
                        <img className="imgButtonNav" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="user photo" />
                    </button>
                </div>
            </div>
        </nav>
    )
}