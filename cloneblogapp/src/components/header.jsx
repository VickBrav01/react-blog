import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="nav-Bar">
      <h1 className="nav-logo">Brav.</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/blog1">Blog1</Link>
        <Link to="/blog2">Blog2</Link>
        <Link to="/blog3">Blog3</Link>
        <Link to="/blog4">Blog4</Link>
      </div>

      <button>Learn More</button>
    </div>
  );
}

export default Header;
