import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "@/context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="login" replace />;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
