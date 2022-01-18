import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import "../App.css";
export const Login = () => {

    const [form, setForm] = useState({ email: "", password: "" });
    const { handleToken } = useContext(AuthContext);
    const navigate = useNavigate();
   

    const handleChange = ({ target: { type, value } }) => {
        setForm({ ...form, [type]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://reqres.in/api/login`, {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                if (res.token) {
                    handleToken(res.token);
                    navigate(-1);
                    alert({
                        title: 'Login Successful',
                        status: 'success',
                      
                    
                    })
                } else {
                    alert({
                        title: 'Wrong Details',
                        status: 'failed',
                       
                    })
                }

            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="align">
            <form onSubmit={handleSubmit}>
                <div  >
                    <h1 >Login</h1>
                    <input onChange={handleChange} type='email' placeholder="Email" />
                    <input onChange={handleChange} type='password' placeholder="Password" />
                    <button type='submit' w={'100%'} colorScheme={'teal'}>Submit</button>
                </div>
            </form>
        </div>
    );
};