import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="homePageButton">
                <Link to="/">
                    Portfolio
                </Link>
            </div>
            <div className="pageButton">
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