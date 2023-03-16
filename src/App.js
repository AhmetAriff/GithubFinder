import Navbar from "./components/Navbar";
import UserList from "./components/UserList";

import React, { useState } from "react";
import Search from "./components/Search";
import Alert from "./components/Alert";
import UsersContextProvider from "./context/UsersContext";

const App = () => {
  const [error, setError] = useState(null);

  const displayAlert = (msg, type) => {
    setError({ msg: msg, type: type });

    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  return (
    <UsersContextProvider>
      <Navbar icon="bi bi-github" title="Github Finder" />
      <Search displayAlert={displayAlert} />
      <Alert error={error} />
      <div className="container mt-3">
        <UserList />
      </div>
    </UsersContextProvider>
  );
};

export default App;
