import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>

      <br />

      <Link to="/about">About</Link>

      <hr />
    </div>
  );
}

export default Navbar;