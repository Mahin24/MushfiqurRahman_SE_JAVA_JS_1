import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {validateEmail} from "../../script/helper";

function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [errors, setErrors] = useState("");

    const changeFirstName = e => {
        setFirstName(e.target.value);
    };

    const changeLastName = e => {
        setLastName(e.target.value);
    };

    const changeEmail = e => {
        setEmail(e.target.value);
    };

    const changePassword = e => {
        setPassword(e.target.value);
    };

    const changeRePassword = e => {
        setRePassword(e.target.value);
    };

    const isValid = () => {
        let errors = {};
        
        if (!firstName) errors.firstName = "First name field is required";
        if (!lastName) errors.lastName = "Last name field is required";
        if (!email) errors.email = "Email field is required";
        if (!password) errors.password = "Password field is required";
        if (!rePassword) errors.rePassword = "Repeat password field is required";

        if (email && !validateEmail(email)) errors.email = "Valid email is required";

        if (password && rePassword && password !== rePassword) {
            errors.password = "Repeat password not match";
        }

        setErrors(errors);

        if (!firstName || password !== rePassword || !validateEmail(email) || !rePassword || !password || !email || !lastName) {
            return false;
        } else return true
    }

    const submitForm = (e) => {
        e.preventDefault();
        
        if (isValid()) {
            let userData = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            };

            let users =  JSON.parse(localStorage.getItem("users")) || [];
            users.push(userData)
            localStorage.setItem("users", JSON.stringify(users));

            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setRePassword("");

            setTimeout(() => {
                window.location = "/auth/login"
            }, 1000);
        }
    }

    const showErrorMessage = (type) => {
        if (type) {
            return errors[type];
        }
    }

    return (
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div className="col-lg-7">
                    <div className="p-5">
                    <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                    </div>
                    <form className="user" onSubmit={submitForm}>
                        <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <input type="text" className="form-control form-control-user" id="exampleFirstName" 
                            value={firstName} onChange={changeFirstName}placeholder="First Name"/>
                            <small className="text-danger ml-3">
                                {showErrorMessage("firstName")}
                            </small>
                        </div>
                        <div className="col-sm-6">
                            <input type="text" className="form-control form-control-user" id="exampleLastName" 
                            value={lastName} onChange={changeLastName}placeholder="Last Name"/>
                            <small className="text-danger ml-3">
                                {showErrorMessage("lastName")}
                            </small>
                        </div>
                        </div>
                        <div className="form-group">
                        <input type="email" className="form-control form-control-user"  id="exampleInputEmail" value={email} onChange={changeEmail} 
                        placeholder="Email Address"/>
                        <small className="text-danger ml-3">
                            {showErrorMessage("email")}
                        </small>
                        </div>
                        
                        <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <input type="password" className="form-control form-control-user" id="exampleInputPassword" 
                            value={password} onChange={changePassword}placeholder="Password"/>

                            <small className="text-danger ml-3">
                                {showErrorMessage("password")}
                            </small>
                        </div>
                        <div className="col-sm-6">
                            <input type="password" className="form-control form-control-user" id="exampleRepeatPassword" 
                            value={rePassword} onChange={changeRePassword}placeholder="Repeat Password"/>
                            <small className="text-danger ml-3">
                                {showErrorMessage("rePassword")}
                            </small>
                        </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-user btn-block">
                            Register Account
                        </button>
                    </form>
                    <hr/>
                    <div className="text-center">
                        <Link to="/auth/login" className="small">Already have an account? Login!</Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </div>
    )
}

export default SignUp
