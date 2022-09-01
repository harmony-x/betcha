import React, { useContext, createContext } from "react";

const initialState: {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>> | null;
} = {
  isPlaying: true,
  setIsPlaying: null,
};

const StateContext = createContext(initialState);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  return (
    <StateContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalState = () => useContext(StateContext);
