import { Link } from "react-router-dom";
import '../styles/navbar.css';

//important hai bro

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

export default Navbar;



