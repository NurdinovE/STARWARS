import React from "react";
import {Link} from "react-router-dom";

import HeaderItem from "../HeaderItem";

import './style.css'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid flex-wrap">
                <Link to='/' className="navbar-brand">STARWARS quide</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <HeaderItem itemName="Planets" link='/planets' />
                        <HeaderItem itemName="Peoples" link='/peoples' />
                        <HeaderItem itemName="Species" link='/species' />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header