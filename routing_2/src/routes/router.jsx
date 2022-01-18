import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../components/dashboard";
import { Home } from "../components/home";
import { Login } from "../components/login";
import { Navbar } from "../components/navbar";
import { Settings } from "../components/settings";
import { PrivateRoute } from "./privateroute";

export const Router = () => {

    return (
        <>
            <Navbar />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path='/settings' element={<PrivateRoute><Settings /></PrivateRoute>} />
            </Routes>
        </>
    );
};