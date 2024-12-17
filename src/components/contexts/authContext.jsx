import { createContext, useContext, useState, useEffect } from 'react'


// Create the context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};


// AuthContext Provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Check localStorage for token and user info on app load
      const token = localStorage.getItem('token');
      const storedUser = JSON.parse(localStorage.getItem('user'));
  
      if (token && storedUser) {
        setUser(storedUser);
      }
      setLoading(false);
    }, []);
  
    const login = (user, token) => {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
    };
  
    const logout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('refresh-token');
      localStorage.removeItem('user');
      setUser(null);
    };
  
    return (
      <AuthContext.Provider value={{ user, login, logout, loading }}>
        {children}
      </AuthContext.Provider>
    );
  
};