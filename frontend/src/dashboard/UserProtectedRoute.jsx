import { Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import { useSelector } from "react-redux";

const UserProtectedRoute = () => {
  const { currentUser, token } = useSelector((state) => state.user);
  if (!token || !currentUser) return <Navigate to="/login" />;
  return currentUser.role === "user" ? <Dashboard /> : <Navigate to="/admin" />;
};

export default UserProtectedRoute;
