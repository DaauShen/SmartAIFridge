import {Outlet, Navigate} from "react-router-dom";
import { getState } from "./userState";

const ProtectedRoutes = () => {
    const user = getState();
    return user ? <Outlet/> : <Navigate to="/signin"/>
}

export default ProtectedRoutes;