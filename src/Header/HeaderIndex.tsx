import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div style={{display:"flex"}}>
         <img src="https://tse3.mm.bing.net/th?id=OIP.qKoEwFdhODp99UZBuq8GSgHaD9&pid=Api&P=0&w=304&h=163" alt="image" />
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
