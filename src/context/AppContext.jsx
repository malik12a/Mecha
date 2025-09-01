import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Create the context
export const AppContext = createContext(null);

// Context provider component
export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showUserLogin, setShowUserLogin] = useState(false);

  const value = {
    navigate,
    user,
    setUser,
    showUserLogin,
    setShowUserLogin,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};
