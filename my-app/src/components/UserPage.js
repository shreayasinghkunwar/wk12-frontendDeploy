import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import DisplayContact from "./DisplayContact";



const UserPage = () => {

    const [getContact, setContactData] = useState([]);
    const [getUser, setUserData] = useState("")

    useEffect(() => {
        getContactData();
    }, []);

    console.log('out', getContact);

    console.log('out', getUser);

    const getContactData = async () => {

        console.log('inside');

        const response = await fetch('http://localhost:8000/user', {
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
        const userName = datas.user
        const result = datas.data
        console.log('datas ', result);

        if (response.status === 404 || !datas) {
            window.alert("Error!!");

        } else {

            setContactData(result);
            setUserData(userName);
            console.log("Data recieved");
        }
    }

    //delete contacts
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
                    <h1 className="mb-3">Welcome : &nbsp;{getUser}</h1>
                    <DisplayContact contactList={getContact} deleteContact={deleteContact} />


                </div>

            </div>


        </>
    )
}

export default UserPage;