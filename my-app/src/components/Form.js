import React from "react";
import FileBase64 from 'react-file-base64';
import logo from "../images/logo.png";
import noImg from "../images/No-Image.png";

const Form = ({ setInfo, setInput, saveData, inputData, image }) => {
    console.log(inputData);
    return (
        <div className="form-container mt-4">

            <form method="POST">
                <div class="row">
                    <div class="col-12 col-lg-12 col-xl-12 ">
                        <div class="mb-3" style={{ display: "flex", gap: "1" }}>
                            <label for="exampleInputEmail1" class="form-label">Profile: &nbsp; &nbsp; &nbsp; &nbsp;</label>
                            <div class="col-12 col-lg-4 col-xl-4 ">
                                <div className="image-container" style={{ height: "150px", width: "180px", backgroundColor: "white", marginBottom: "0.5rem" }}>
                                    {!image ? <img src={noImg} style={{ height: "150px", width: "180px" }} /> : <img style={{ height: "150px", width: "180px" }} src={image} />}
                                </div>
                                <FileBase64
                                    name="image"
                                    type="file"
                                    multiple={false}
                                    onDone={({ base64 }) => {
                                        setInput({ ...inputData, image: base64 })
                                        console.log('0img', image);
                                    }}
                                />
                            </div></div>

                    </div>
                    <div class="col-12 col-lg-6 col-xl-6 ">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="text" class="form-control" name="name" value={inputData.name} onChange={setInfo} id="exampleInputEmail1" />

                        </div>

                    </div>
                    <div class="col-12 col-lg-6 col-xl-6 ">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Phone number</label>
                            <input type="text" class="form-control" name="number" value={inputData.number} onChange={setInfo} id="exampleInputEmail1" />
                        </div>

                    </div>
                    <div class="col-12 col-lg-6 col-xl-6 ">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" onChange={setInfo} name="email" value={inputData.email} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>

                    </div>
                    <div class="col-12 col-lg-6 col-xl-6 ">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Description</label>
                            <textarea type="text" class="form-control" name="description" onChange={setInfo} value={inputData.description} id="exampleInputEmail1" cols="25" rows="3" ></textarea>

                        </div>

                    </div>

                </div>
                <button type="submit" onClick={saveData} class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form