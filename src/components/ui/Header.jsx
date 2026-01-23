import React from 'react'
import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom'
const Header = () => {
    const [show, setShow] = useState(false);
     const handleButtonToggle = () => {
    return setShow(!show);
  };
    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="Logo">
                        <Link to="/"><h1>
                            World Atlas
                        </h1></Link>
                    </div>

                    <nav className={show ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">about</Link>
                            </li>
                            <li>
                                <Link to="/contact" >contact</Link>
                            </li>
                            <li>
                                <Link to="/country">country</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="ham-menu">
                        <button onClick={handleButtonToggle}>
                            <IoMdMenu />
                        </button>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header