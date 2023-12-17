import { Link } from "react-router-dom";
import './Header.css'

const Header = () => (
    <nav className="nav">
        <div className="logo">
            <Link to="/home" className="nav-link">Mandarin</Link>
        </div>
        <div className="nav-content">
            <Link to="/characters" className="nav-link">Characters</Link>
            <Link to="/study" className="nav-link">Study</Link>
            <Link to="/about" className="nav-link">About</Link>
        </div>
    </nav>
)

export default Header