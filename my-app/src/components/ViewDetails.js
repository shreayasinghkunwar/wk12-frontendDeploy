import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import noImg from "../images/No-Image.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const ViewDetails = () => {
    const [getContact, setContactData] = useState([]);
    console.log('state', getContact);

    useEffect(() => {
        getContactData()
    }, []);

    const id = useParams("");




    const getContactData = async () => {

        console.log('inside');
        console.log('id', id.id);
        const ids = id.id;

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
            setContactData(result);
            console.log("Data recieved");
        }
    }



    return (
        <>
            <Navbar>
            </Navbar>
            <div className="view-container mt-5">
                <div class="row">
                    <div class="col-12 col-lg-8 col-xl-8 col-md-8 mb-2">
                        <div className="image-container" style={{ height: "150px", width: "180px" }}>
                            {!getContact.image ?
                                <img src={noImg} style={{ height: "150px", width: "180px" }} />
                                : <img src={getContact.image} style={{ height: "150px", width: "180px" }} />
                            }
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 col-xl-4 col-md-4 mb-2">
                        <div className="d-flex gap-4">

                            <Link to={`/edit/${getContact._id}`}>
                                <button className="action-btn2"><i class="bi bi-pen-fill"></i></button>
                            </Link>
                            <button className="action-btn3"><i class="bi bi-trash3-fill"></i></button>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 col-xl-6 col-md-6 mt-5">
                        <h5> <i class="bi bi-person-fill"></i> Name: &nbsp; <span >{getContact.name}</span></h5>
                    </div>


                    <div class="col-12 col-lg-6 col-xl-6 col-md-6 mt-5">
                        <h5> <i class="bi bi-telephone-fill"></i> Phone number: &nbsp; <span>{getContact.number}</span></h5>
                    </div>

                    <div class="col-12 col-lg-6 col-xl-6 col-md-6 mt-5">
                        <h5><i class="bi bi-envelope-fill"></i>Email: &nbsp;<span>{getContact.email}</span></h5>
                    </div>

                    <div class="col-12 col-lg-6 col-xl-6 col-md-6 mt-5">
                        <h5>Description:&nbsp; <span>{getContact.description}</span></h5>
                    </div>

                </div>
            </div >
        </>
    )


}

export default ViewDetails