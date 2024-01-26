import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="Logo">
        {" "}
        <h3> Blog Application </h3>{" "}
      </Link>
      <Link to="/"> Home page </Link> <Link to="/about"> About us </Link>{" "}
      <Link
        to="/blogs
        "
      >
        {" "}
        Blog{" "}
      </Link>{" "}
    </nav>
  );
}
