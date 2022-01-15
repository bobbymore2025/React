import "./form.css"
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";


export const Form = () => {

    const { toggleAuth, isLogin, setIsLogin } = useContext(AuthContext);
    const [user, setUser] = useState({ email: "", password: "" });
    const [token, setToken] = useState("");
  

    const handleChange = (e) => {
        let { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://reqres.in/api/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.token) {
                    setIsLogin(true);
                    setToken(res.token);
                    toggleAuth();
                }
            })
    };

    return isLogin ? (
           <div>
              
            <img  src="https://freepngimg.com/download/success/6-2-success-png-image.png" alt="Login Successful" />
          <p> Login Success</p>
            </div>
    ) : (
        <form onSubmit={handleSubmit}>
           
                <h1>Login</h1>
                <input onChange={handleChange} name="email" type='text' placeholder="Email" />
                <input onChange={handleChange} name="password" type='password' placeholder="Password" />
                <button type='submit' colorScheme='teal' w='100%'>
                    Login
                </button>
            
        </form>
    );
};