import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="main-header">
            <nav className="nav-container">
                {/* 로고: 클릭 시 홈으로 이동 */}
                <div className="logo">
                    <Link to="/">Portfolio</Link>
                </div>
                {/* 메뉴 리스트 */}
                <ul className="nav-menu">
                    <li>
                        <Link to="/#projects">projects</Link>
                    </li>
                    <li>
                        <Link to="/#skills">skills</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;