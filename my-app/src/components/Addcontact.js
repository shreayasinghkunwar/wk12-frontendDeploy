import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from './Form';
import Navbar from "./Navbar";

const Addcontact = () => {
    const [input, setInput] = useState({

        name: "",
        number: "",
        email: "",
        description: "",
        image: "",
        favorite: false

    })

    const setData = (e) => {
        const { name, value } = e.target;
        console.log('val', e.target.value)

        setInput((preval) => {
            return {
                ...preval,
                [name]: value
            }

        })

    }
    const setFavourite = () => {
        setInput({ ...input, favorite: true });
        alert("Added to favorite");
    }

    const addInputData = async (e) => {
        e.preventDefault();
        console.log('i m inside submit', input);

        const { name, number, email, description, image, favorite } = input
        const res = await fetch("http://localhost:8000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, number, email, description, image, favorite,
                token: window.localStorage.getItem("token")
            })
        });
        const response = await res.json();
        console.log(response);

        if (res.status === 404 || !response) {
            window.alert(`${response.message}`);
            console.log("Error");
        } else {
            window.alert("Contact is saved.");
            console.log("Data saved");
        }

    }

    return (
        <>
            <Navbar></Navbar>
            <div className="form-container mt-6">
                <div >
                    <Link to="/user"> <button className="view-btn">View Contact </button></Link>
                    <button className="view-btn" onClick={setFavourite}>Add to Favorite </button>
                </div>

                <Form setInfo={setData} setInput={setInput} saveData={addInputData} inputData={input} image={input.image} />


            </div>
        </>
    )
}

export default Addcontact;