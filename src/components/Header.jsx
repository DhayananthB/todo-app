import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Header = () => {
    const navigate = useNavigate();
    const handleLogout = async ()=>{
        await signOut(auth);
        navigate("/login")
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>To Do App</div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <button onClick={handleLogout}>Logout</button>

            </div>
        </div>
    )
}
export default Header;