import { useState, useEffect } from 'react';

const jwtDecode = (await import('jwt-decode')).default; // Dynamic import to handle default export

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setUser({
        id: decodedToken.id,
        role: decodedToken.role
      });
    }
  }, []);

  const login = (token) => {
    const decodedToken = jwtDecode(token);
    localStorage.setItem('token', token);
    setUser({
      id: decodedToken.id,
      role: decodedToken.role
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return { user, login, logout };
};
