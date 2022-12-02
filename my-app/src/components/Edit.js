import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "./Form";
import Navbar from "./Navbar";


const Edit = () => {

    const history = useNavigate();

    const [input, setInput] = useState({

        name: "",
        number: "",
        email: "",
        description: ""

    })



    useEffect(() => {
        getContactData()
    }, []);


    const setData = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value)

        setInput((preval) => {
            return {
                ...preval,
                [name]: value
            }

        })

    }

    const id = useParams("");

    console.log('id', id.id);
    const ids = id.id;


    const updateData = async (e) => {
        e.preventDefault();
        console.log('i m inside submit', input);
        console.log('ids', ids);

        const { name, number, email, description, image, favorite } = input
        const res = await fetch(`http://localhost:8000/edit/${ids}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, number, email, description, image, favorite
            })
        });
        const response = await res.json();
        console.log(response);

        if (res.status === 404 || !response) {
            window.alert("Error!!");
            console.log("Error");
        } else {
            window.alert("Contact is Edited.");
            console.log("Data saved");
            history("/user");
        }

    }


    const getContactData = async () => {
        const response = await fetch(`http://localhost:8000/view/${ids}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            }


        });
        console.log('resp ', response);
        const datas = await response.json();
        const result = datas.data
        console.log('datas ', result);

        if (response.status === 404 || !datas) {
            window.alert("Error!!");

        } else {
            setInput(result);
            console.log("Data recieved");
        }
    }


    const setFavourite = () => {
        setInput({ ...input, favorite: true });
        alert("Added to favorite");
    }

    const deleteFavorite = () => {
        setInput({ ...input, favorite: false });
        alert("Removed from favorite");

    }


    return (
        <>
            <Navbar></Navbar>

            <div>
                <div className="form-container mt-4">
                    <button className="view-btn" onClick={setFavourite}>Add to Favorite </button>
                    <button className="view-btn" onClick={deleteFavorite}>Remove  Favorite </button>
                    <Form setInfo={setData} setInput={setInput} saveData={updateData} inputData={input} image={input.image} />

                </div>

            </div>
        </>
    )
}

export default Edit