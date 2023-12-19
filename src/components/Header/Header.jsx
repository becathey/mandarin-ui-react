import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => (
    <nav className="nav">
        <div className="logo">
            <Link to="/" className="nav-link">Mandarin</Link>
        </div>
        <div className="nav-content">
            <NavLink to="/home" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>List</NavLink>
            <NavLink to="/cards" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Cards</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
        </div>
    </nav>
)

export default Header