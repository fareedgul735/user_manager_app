import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>UMS</h2>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/users">Users List</Link>
        </li>
        <li>
          <Link to="/addUser">Add User</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
