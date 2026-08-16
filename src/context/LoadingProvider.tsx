"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType>({
  isLoading: true,
  setIsLoading: () => {},
  setLoading: () => {},
});

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [percent, setLoading] = useState(0);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, setLoading }}>
      {isLoading && <Loading percent={percent} />}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

export default LoadingProvider;
