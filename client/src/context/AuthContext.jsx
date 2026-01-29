import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const API_URL = import.meta.env.VITE_API_URL

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Page refresh par user check
  useEffect(() => {

    const fetchUser = async () => {
      try {

        const res = await axios.get(
          `${API_URL}/auth/me`,
          { withCredentials: true }
        );

        setUser(res.data.user);

      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
