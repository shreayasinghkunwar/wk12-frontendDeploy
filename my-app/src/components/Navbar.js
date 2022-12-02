import React, { useState, useEffect } from "react";
import logo from "../images/logo.png"

import { Link, useParams, useNavigate } from "react-router-dom"


const Navbar = () => {

    const [searchName, setSearch] = useState("");
    const history = useNavigate();

    const setInput = (e) => {
        const { name, value } = e.target
        console.log('namesearch', value)
        setSearch(value);
    }

    const search = () => {
        history(`/search/${searchName}`);
    }

    const logout = () => {

        localStorage.removeItem("token");
        window.location.href = "/"
    }



    return (
        <header>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img class="logo" src={logo} /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto  mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/user" class="nav-link active">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/favorite" class="nav-link" href="#">Favorite</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/register">Add Contact</Link>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" onClick={logout}>Logout</button>
                            </li>

                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" name="name" value={`${searchName}`} type="search" placeholder="Search" aria-label="Search" onChange={setInput} />
                            <button class="btn btn-outline-success" type="submit" onClick={search}  >Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar