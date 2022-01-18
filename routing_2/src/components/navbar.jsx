import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import "../App.css";
export const Navbar = () => {

    const { token, handleToken } = useContext(AuthContext);

    return (
        <>
           
                
                <div className="align">
                    <Link to={'/'}><button>Home</button></Link>
                    <Link to={'/dashboard'}><button>Dashboard</button></Link>
                    <Link to={'/settings'}><button >Settings</button></Link>
                    <Link to={'/login'}>
                        <button
                            onClick={token ? () => { handleToken("") } : undefined}
                          
                        >
                            {!token ? "Login" : "Logout"}
                        </button>
                    </Link>
                </div>
           
        </>
    );
};