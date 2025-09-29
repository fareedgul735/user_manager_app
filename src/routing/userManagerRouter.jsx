import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import Landing from "../pages/Landing.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Blogs from "../pages/Blogs.jsx";
import UsersList from "../pages/UsersList.jsx";
import AddUser from "../pages/AddUser.jsx";
import UpdateUser from "../pages/UpdateUser.jsx";

function UserManagerRouter() {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/addUser/" element={<AddUser />} />
          <Route path="/editUser/:id" element={<UpdateUser />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default UserManagerRouter;
