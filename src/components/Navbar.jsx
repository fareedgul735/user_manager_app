import { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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

      <Button
        className={styles.menuBtn}
        type="text"
        icon={<MenuOutlined />}
        onClick={showDrawer}
      />

      <Drawer title="Menu" placement="right" onClose={onClose} open={open}>
        <ul className={styles.drawerLinks}>
          <li>
            <Link to="/" onClick={onClose}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" onClick={onClose}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/blogs" onClick={onClose}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/users" onClick={onClose}>
              Users List
            </Link>
          </li>
          <li>
            <Link to="/addUser" onClick={onClose}>
              Add User
            </Link>
          </li>
        </ul>
      </Drawer>
    </nav>
  );
}
