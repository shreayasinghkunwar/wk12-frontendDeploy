import React, { useState } from "react";



const Signin = () => {

    const [userData, setUserData] = useState({
        name: "",
        username: "",
        password: ""
    });
    console.log("state", userData)

    const setInput = (e) => {
        const { name, value } = e.target
        console.log(value);

        setUserData((preval) => {
            return {
                ...preval,
                [name]: value

            }

        })
    }

    const saveData = async (e) => {
        console.log("i m submit", userData);
        e.preventDefault();
        const { name, username, password } = userData
        const res = await fetch("http://localhost:8000/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, username, password
            })
        });
        const response = await res.json();
        console.log(response);

        if (res.status === 404 || !response) {
            window.alert(`${response.message}`);
            console.log("Error");
        } else {
            window.alert("Successful.");
            console.log("Data saved");
            window.location.href = "/"
        }


    }

    return (
        <div class="mt-5 " style={{ height: "550px", width: "800px", backgroundColor: "#aeaecfd4", margin: "auto" }}>
            <h1>Sign in</h1>
            <form method="POST" style={{ width: "70%", margin: "auto" }}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Full name</label>
                    <input type="text" class="form-control" name="name" onChange={setInput} id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="text" class="form-control" name="username" onChange={setInput} id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" name="password" onChange={setInput} class="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" class="btn btn-primary" onClick={saveData}>Submit</button>
            </form>
        </div>
    )


}

export default Signin;

