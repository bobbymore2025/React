import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import "./form.css"

export const Navbar = () => {

    const { isAuth, toggleAuth, setIsLogin } = useContext(AuthContext);

    const handleLogout = () => {
        toggleAuth();
        setIsLogin(false);
    }

    return (
        <><div className="nav">
                <h1 >User App</h1>

            
                <button
                    colorScheme='teal'
                    onClick={isAuth ? handleLogout : undefined} >
                     {isAuth ? "Logout" : "Login"}
                </button>
                </div>
                </>
          
    );
};