import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import Search from "./components/Search";
import Alert from "./components/Alert";
import UsersContextProvider from "./context/UsersContext";
import AlertContextProvider from "./context/AlertContext";
import React from "react";

const App = () => {
  return (
    <UsersContextProvider>
      <AlertContextProvider>
        <Navbar icon="bi bi-github" title="Github Finder" />
        <Search />
        <Alert />
        <div className="container mt-3">
          <UserList />
        </div>
      </AlertContextProvider>
    </UsersContextProvider>
  );
};

export default App;
