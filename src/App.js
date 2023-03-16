import Navbar from "./components/Navbar";
import UserList from "./components/UserList";

import React, { useReducer, useState } from "react";
import Search from "./components/Search";
import Alert from "./components/Alert";
import UsersReducer from "./reducer/UsersReducer";

const App = () => {
  const initalState = {
    users: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(UsersReducer, initalState);
  const [error, setError] = useState(null);

  const searchUser = (keyword) => {
    setLoading();
    setTimeout(() => {
      fetch("https://api.github.com/search/users?q=" + keyword)
        .then((Response) => Response.json())
        .then((data) => {
          dispatch({
            type: "SEARCH_USERS",
            users: data.items,
          });
        });
    }, 1000);
  };

  const clearResult = () => {
    dispatch({ type: "CLEAR_USERS" });
  };

  const setLoading = () => {
    dispatch({
      type: "SET_LOADİNG",
    });
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
        showClearButton={state.users.length > 0 ? true : false}
        displayAlert={displayAlert}
      />
      <Alert error={error} />
      <div className="container mt-3">
        <UserList users={state.users} loading={state.loading} />
      </div>
    </div>
  );
};

export default App;
