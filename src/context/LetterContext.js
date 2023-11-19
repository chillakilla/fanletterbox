import React, { createContext, useContext, useState } from "react";
import fakeData from "../fakeData.json";

const LetterContext = createContext();

export const useLetterContext = () => {
  return useContext(LetterContext);
};

export const LetterProvider = ({ children }) => {
  const [letters, setLetters] = useState(fakeData);
  const [member, setMember] = useState("카리나");

  const contextValue = {
    letters,
    setLetters,
    member,
    setMember,
  };
  return (
    <LetterContext.Provider value={contextValue}>
      {children}
    </LetterContext.Provider>
  );
};
