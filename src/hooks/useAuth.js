// Hooks from React
import { useContext } from "react";

// Auth Context
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

// The hook
const useAuth = () => {
  // Getting context data
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
