import Navbar from "./components/Navbar";
import UserList from "./components/UserList";

import React, { useState } from "react";
import Search from "./components/Search";
import Alert from "./components/Alert";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchUser = (keyword) => {
    setLoading(true);

    setTimeout(() => {
      fetch("https://api.github.com/search/users?q=" + keyword)
        .then((Response) => Response.json())
        .then((data) => {
          setUsers(data.items);
          setLoading(false);
        });
    }, 1000);
  };

  const clearResult = () => {
    setUsers([]);
  };

  const displayAlert = (msg, type) => {
    setError({ msg: msg, type: type });

    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  return (
    <div>
      <Navbar icon="bi bi-github" title="Github Finder" />
      <Search
        searchUser={searchUser}
        clearResult={clearResult}
        showClearButton={users.length > 0 ? true : false}
        displayAlert={displayAlert}
      />
      <Alert error={error} />
      <div className="container mt-3">
        <UserList users={users} loading={loading} />
      </div>
    </div>
  );
};

export default App;
