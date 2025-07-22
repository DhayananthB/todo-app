import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();

    if (user === undefined) return <p>Loading...</p>
    return user ? children : <Navigate to="/login" />;

}

export default PrivateRoute;