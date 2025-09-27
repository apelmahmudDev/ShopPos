import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
// Replace with SecureStore/Keychain in real app
// const storageKey = 'auth_token';

type AuthContextValue = {
  loading: boolean;
  isAuthenticated: boolean;
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const saved = await Promise.resolve<string | null>(null); // TODO read from secure storage
        setToken(saved);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const signIn = useCallback(async (newToken: string) => {
    setToken(newToken);
    // TODO persist to secure storage
  }, []);

  const signOut = useCallback(async () => {
    setToken(null);
    // TODO remove from secure storage
  }, []);

  const value = useMemo(
    () => ({ loading, isAuthenticated: !!token, signIn, signOut }),
    [loading, token, signIn, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
