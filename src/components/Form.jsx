import { useState } from "react";
import { validation} from "./validation.js";


const Form = ( { login }) => {

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
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input onChange={handleChange} value={userData.email} name="email" type="text" placeholder="Ingresa un email válido"/>
            {errors.email && <div className="warning">
                <p>{errors.email}</p>
                <ul>
                    <li>Hey, don't leave this empty!</li>
                    <li>Woah, keep it under 35 characters!</li>
                </ul>
                </div>}
            <label htmlFor="password">Password:</label>
            <input onChange={handleChange} value={userData.password} name="password" type="text" placeholder="Ingresa aquí tu password"/>
            {errors.password && <div className="warning">
                <p>{errors.password}</p>
                <ul>
                    <li>Gotta have at least one number!</li>
                    <li>Make it between 6 and 10 characters, please!</li>
                </ul>
                </div>}
            <button value="submit">Submit</button>
        </form>
    )
};

export default Form;