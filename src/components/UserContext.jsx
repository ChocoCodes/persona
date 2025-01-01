import React, { createContext, useState } from "react";

// the UserContext
export const UserContext = createContext();

// the UserProvider component
export default function UserProvider({ children }) {
  const [name, setName] = useState(null);

  return <UserContext.Provider value={{ name, setName }}>
    {children}
  </UserContext.Provider>;
}