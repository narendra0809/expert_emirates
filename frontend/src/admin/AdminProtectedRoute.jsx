import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Admin from "./Admin";

const AdminProtectedRoute = () => {
  const { currentUser, token } = useSelector((state) => state.user);
  if (!token || !currentUser) return <Navigate to="/login" />;
  return currentUser.role === "admin" ? (
    <Admin />
  ) : (
    <Navigate to="/dashboard" />
  );
};

export default AdminProtectedRoute;
