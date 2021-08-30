import React, { createContext, useContext, useState, useEffect } from "react";
import api from "services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [userData, setUser] = useState(false);
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  async function SignIn(credentials) {
    try {
      const response = await api.post("/auth/sign-in", credentials);
      const token = response.headers.authorization;

      setUser(response.data.name);
      userHasAuthenticated(true);

      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("token", token);
      localStorage.setItem("refresh-token", response.headers["refresh-token"]);

      api.defaults.headers.common = { Authorization: `Bearer ${token}` };
      return response;

    } catch (error) {
      return error;
    }
  }

  async function Logout() {
    setUser(null);
    userHasAuthenticated(false);

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("refresh-token");

    api.defaults.headers.Authorization = undefined;
  }

  useEffect(() => {
    const sessionUser = localStorage.getItem("user");
    const sessionToken = localStorage.getItem("token");

    if (sessionToken && sessionUser) {
      setUser(JSON.parse(sessionUser));
      api.defaults.headers.Authorization = `Bearer ${sessionToken}`;
      userHasAuthenticated(true);
    } else {
      userHasAuthenticated(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userData,
        SignIn,
        Logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthContext;
