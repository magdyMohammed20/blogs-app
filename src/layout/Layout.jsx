import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

// React Router Routes Layout
const Layout = () => {
  return (
    <div>
      <Navbar />
      {/* Pages Content */}
      <Outlet />
    </div>
  );
};

export default Layout;
