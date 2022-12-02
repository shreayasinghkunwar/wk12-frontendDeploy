import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DisplayContact from "./DisplayContact";
import Navbar from "./Navbar";



const Search = () => {

    const param = useParams();
    console.log('passed', param);
    const name = param.name;
    console.log(name);

    const [getContact, setContactData] = useState([]);

    useEffect(() => {
        console.log('reload')
        getContactData();

    }, []);

    console.log('out', getContact);

    const getContactData = async () => {

        console.log('inside');

        const response = await fetch(`http://localhost:8000/search/${name}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token")
            })


        });
        console.log('resp ', response);
        const datas = await response.json();

        const result = datas.data
        console.log('datas ', result);

        if (response.status === 404 || !datas) {
            window.alert("Error!!");

        } else {
            setContactData(result);
            console.log("Data recieved");
        }
    }

    const deleteContact = async (id) => {

        console.log('inside del', id);

        const response = await fetch(`http://localhost:8000/delete/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            }


        });
        console.log('resp ', response);
        const deletedData = await response.json();

        console.log('deletedData ', deletedData.data);

        if (response.status === 404 || !deletedData) {
            window.alert("Error!!");

        } else {

            console.log("User Deleted");
            getContactData();

        }
    }


    return (
        <>
            <Navbar />

            <div className="mt-5">
                <div className="container">
                    <DisplayContact contactList={getContact} deleteContact={deleteContact} />

                </div>
            </div>
        </>
    )
}

export default Search;