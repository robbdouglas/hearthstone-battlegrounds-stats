import { createContext, useContext, useState } from "react";

export const initialUser = {
  _id: "",
  userName: "",
  isLoggedIn: false,
};

export const UsersContext = createContext({
  user: initialUser,
  setUser: () => null,
});

export const useUsersContext = () => useContext(UsersContext);

const UsersContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  return (
    <UsersContext.Provider value={{ user, setUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
