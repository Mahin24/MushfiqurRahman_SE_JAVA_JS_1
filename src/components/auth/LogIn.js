import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";
 
function LogIn() {
    const [username, setUserName]= useState("");
    const [password, setPassword]= useState("");
    const [errorMessage, setErrorMessage] = useState("")

    const changeUserName = (e) => {
        let value = e.target.value;
        setUserName(value);
    };

    const changePassword = (e) => {
        let value = e.target.value;
        setPassword(value);
    }

    const userLogin = (e) => {
        e.preventDefault();
        if (username && password) {
            let users =  JSON.parse(localStorage.getItem("users")) || [];
            let user = users.find(u => (u.email === username && u.password === password ));

            if (user) {
                localStorage.setItem("myProfile", JSON.stringify(user));
                window.location="/admin/"
            } else {
                setErrorMessage("Email or password is incorrect!");
            }
        } else {
            setErrorMessage("Email or password is invalid!");
        }
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">

                <div className="col-xl-10 col-lg-12 col-md-9">

                    <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div className="row">
                        <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                        <div className="col-lg-6">
                            <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                            </div>
                            <form className="user" onSubmit={userLogin}>
                                <div className="form-group">
                                <input type="email" className="form-control form-control-user" id="exampleInputEmail" 
                                value={username} onChange={changeUserName}
                                aria-describedby="emailHelp" placeholder="Enter Email Address..."/>
                                </div>
                                <div className="form-group">
                                <input type="password" className="form-control form-control-user"
                                value={password} onChange={changePassword}
                                id="exampleInputPassword" placeholder="Password"/>
                                </div>
                                
                                <button type="submit" className="btn btn-primary btn-user btn-block mt-5 mb-3">
                                Login
                                </button>
                                <div className="text-center text-danger">
                                    {errorMessage}
                                </div>
                            </form>
                            <hr/>
                            <div className="text-center">
                                <Link to="/auth/signup" className="small">Create an Account!</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>

                </div>

            </div>
        </Fragment>
    )
}

export default LogIn
