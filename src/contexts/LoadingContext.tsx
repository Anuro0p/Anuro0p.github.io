import { createContext, useContext, useState, ReactNode } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  progress: number;
  setLoading: (isLoading: boolean, progress: number) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const setLoading = (loading: boolean, prog: number) => {
    setIsLoading(loading);
    setProgress(prog);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, progress, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

