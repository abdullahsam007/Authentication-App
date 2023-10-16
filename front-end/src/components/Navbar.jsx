/*import { Link } from "react-router-dom";
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link to='/'>Home</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;*/

import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import '../styles/navbar.css';

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav>
      <div className="nav-container">
        <Link to='/'>Home</Link>
        {user ? (
          <Link to='/logout'>Logout</Link>
        ) : (
          <>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

