"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { auth } from '@/firebase/firebase';
import { onAuthStateChanged, getRedirectResult, User } from 'firebase/auth';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  loading: true,
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let unsubscribe: () => void;

    const initAuth = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result?.user) {
          setCurrentUser(result.user);
        }
      } catch (error) {
        console.error("Error getting redirect result:", error);
      }

      unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        setLoading(false);
      });
    };

    initAuth();

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  const value: AuthContextType = {
    currentUser,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
