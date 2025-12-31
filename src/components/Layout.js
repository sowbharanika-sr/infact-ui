import Topbar from "./Topbar";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const teacherTabs =
    location.pathname.includes("principal-dashboard") ||
    location.pathname.includes("teacher-list");

  return (
    <>
      <Topbar variant={teacherTabs ? "teacher" : "class"} />
      <Outlet />
    </>
  );
};

export default Layout;
