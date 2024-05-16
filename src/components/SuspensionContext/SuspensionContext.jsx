import React, { createContext, useState, useContext } from 'react';

const SuspensionDataContext = createContext();

export const SuspensionDataProvider = ({ children }) => {
  const [inputData, setInputData] = useState({
    springDeformation: '',
    speed: '',
    time: '',
    springStiffness: '',
    mediumViscosity: '',
    objectMass: ''
  });

  const updateInputData = (field, value) => {
    setInputData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <SuspensionDataContext.Provider value={{ inputData, updateInputData }}>
      {children}
    </SuspensionDataContext.Provider>
  );
};


export const useSuspensionData = () => useContext(SuspensionDataContext);
