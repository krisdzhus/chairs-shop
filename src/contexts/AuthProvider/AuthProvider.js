// React
import React, { createContext } from "react";

// Hooks for using the firebase data
import useFirebase from "../../hooks/useFirebase";

// Creating context
export const AuthContext = createContext(null);

// Main Auth Provider Component
const AuthProvider = ({ children }) => {
  // Get and set the data from firebase
  const allContext = useFirebase();

  // Context provider
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
