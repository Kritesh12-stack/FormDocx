import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute(){
    const isAuthenticated = useSelector(state => !!state.auth.accessToken);
    return isAuthenticated ? <Outlet/> : <Navigate to={''} />
}