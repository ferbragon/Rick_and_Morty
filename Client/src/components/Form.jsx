import { useState } from "react";
import { validation} from "./validation.js";
import "../stylesheets/Form.css";
import mainImage from "../assets/icegif-519.gif"

const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <form className="form" onSubmit={handleSubmit}>
            <div className="img-box">
            <img className="img-form" src={mainImage} alt="gif-rick-morty"/>
            {errors.email && <div className="warning">
                <ul className="rick-messages">
                    {errors.email === "Enter a valid email" && <li className="rick-message-1">Enter a valid email!</li>}
                    {errors.email !== "Enter a valid email" && <li className="rick-message-1">Woah, keep the email under 35 characters!</li>}
                    
                </ul>
                </div>}
            {errors.password && <div className="warning">
                <ul className="morty-messages">
                    {errors.password === "The password must have une number" && <li className="morty-message-1">Password gotta have at least one number!</li>}
                    {errors.password !== "The password must have une number" && <li className="morty-message-1">Password between 6 and 10 characters, please!</li>}
                </ul>
                </div>}
            </div>

            <div className="login-box">
            <label className="label-login" htmlFor="email">Email:</label>
            <input className="input-login" onChange={handleChange} value={userData.email} name="email" type="text" placeholder="Enter an email"/>
            <label className="label-login-password" htmlFor="password">Password:</label>
            <input className="input-login" onChange={handleChange} value={userData.password} name="password" type="text" placeholder="Enter your password"/>
            <button className="button-login" value="submit"><span>LOG IN</span></button>
            </div>
        </form>
    )
};

export default Form;