import { createContext, useState, useEffect } from "react";

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true); // ✅ ตั้งค่าเริ่มต้นเป็น true

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 2000);
  }, []);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
