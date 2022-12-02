import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const DisplayContact = ({ contactList, deleteContact }) => {

    return (
        <>
            <table class="table table-info">
                <thead>
                    <tr>
                        <th scope="col">Sn</th>
                        <th scope="col">Name</th>
                        <th scope="col" >Phone no.</th>
                        <th scope="col" className="action" >Action </th>
                    </tr>
                </thead>
                <tbody>
                    {contactList && contactList.length ?
                        contactList.map((element, id) => {
                            return (
                                <tr>
                                    <th scope="row">{id + 1}</th>
                                    <td>{element.name}</td>
                                    <td>{element.number}</td>

                                    <td className="d-flex gap-4">
                                        <Link to={`/view/${element._id}`}><button className="action-btn1"><i class="bi bi-eye-fill"></i></button></Link>
                                        <Link to={`/edit/${element._id}`}><button className="action-btn2"><i class="bi bi-pen-fill"></i></button> </Link>
                                        <button className="action-btn3" onClick={() => deleteContact(element._id)}><i class="bi bi-trash3-fill"></i></button>
                                    </td>

                                </tr>

                            )
                        })
                        : <tr colspan="4">
                            <td colspan="4"> No data available</td></tr>}



                </tbody>
            </table>
        </>
    )
}

export default DisplayContact;