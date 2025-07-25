import { Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const UserProtectedRoute = () => {
  const user = true;
  return user ? <Dashboard /> : <Navigate to="/login" />;
};

export default UserProtectedRoute;
