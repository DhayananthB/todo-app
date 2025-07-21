import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>To Do App</div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>

            </div>
        </div>
    )
}
export default Header;