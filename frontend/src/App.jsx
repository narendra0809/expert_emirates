import { BrowserRouter as Router } from "react-router-dom";
// import favicon from "./admin/assets/setting/image1.png";
import AppRoutes from "./AppRoutes";
import Favicon from "react-favicon";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logout } from "./features/user/userSlice";

export default function App() {
  const { favicon } = useSelector((state) => state.icons);
  const dispatch = useDispatch();

  useEffect(() => {
    const expiresAt = localStorage.getItem("expiresAt");
    if (expiresAt && Date.now() > Number(expiresAt)) {
      dispatch(logout());
      localStorage.removeItem("token");
      localStorage.removeItem("expiresAt");
      window.location.href = "/login";
    }
  }, []);

  return (
    <Router>
      <Favicon
        url={favicon === null || favicon === undefined ? "#" : favicon}
      />
      <AppRoutes />
    </Router>
  );
}
