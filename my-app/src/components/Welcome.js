import React, { useState } from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <>
            <div className="mt-5 main-page" style={{ height: "550px", width: "800px", backgroundColor: "#aeaecfd4", margin: "auto" }} >
                <h2 className="mt-3 " style={{ textAlign: "center", margin: "auto", marginTop: "3rem" }}>Contacts Manager</h2>
                <div style={{ display: "flex", marginTop: "10rem" }}>

                    <div style={{ width: "50%", textAlign: "center" }}>
                        <Link to="/login">   <button style={{ margin: "auto", height: "60px", width: "150px" }} >Login</button></Link>


                    </div>

                    <div style={{ width: "50%", textAlign: "center" }}>
                        <Link to="/signin"><button style={{ margin: "auto", height: "60px", width: "150px" }}>Register</button></Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Welcome;
