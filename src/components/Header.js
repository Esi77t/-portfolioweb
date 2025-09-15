import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="headerContainer">
            <Link to="/">
                Portfolio
            </Link>
            <div>
                <Link to="/projects">
                    Projects
                </Link>
                <Link to="skills">
                    Skills
                </Link>
                <Link to="contact">
                    Contact
                </Link>
            </div>
        </div>
    );
}

export default Header;