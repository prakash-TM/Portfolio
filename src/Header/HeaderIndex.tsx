import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div style={{display:"flex"}}>
          <img src="icon.jpg" style={{ width: "500px" }} />
        </div>

        <div className="header1">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/Project">
            Projects
          </Link>
          <Link className="link" to="/About">
            About Me
          </Link>
          <Link className="link" to="/Contact">
            Contacts
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
