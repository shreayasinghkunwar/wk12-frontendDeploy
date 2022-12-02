import React from "react";
import { useEffect, useState } from "react";

import DisplayContact from "./DisplayContact";
import Navbar from "./Navbar";

const Favorite = () => {
    const [getContact, setContactData] = useState([]);

    useEffect(() => {
        getContactData();
    }, []);

    console.log('out', getContact);

    const getContactData = async () => {

        console.log('inside');

        const response = await fetch('http://localhost:8000/favorite', {
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

        console.log('datas ', datas.data);

        if (response.status === 404 || !datas) {
            window.alert("Error!!");

        } else {
            setContactData(datas.data);
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
            <Navbar></Navbar>
            <div className="mt-5">
                <div className="container">
                    <DisplayContact contactList={getContact} deleteContact={deleteContact} />


                </div>
            </div>
        </>
    )

}

export default Favorite;