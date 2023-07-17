import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? <Element /> : <Navigate to="/Unauthorized" replace />
      }
    />
  );
};

export default PrivateRoute;
