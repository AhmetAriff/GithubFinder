import React, { useReducer } from "react";
import UsersReducer from "../reducer/UsersReducer";

export const UsersContext = React.createContext();

const UsersContextProvider = (props) => {
  const initalState = {
    users: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(UsersReducer, initalState);

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

  const setLoading = () => {
    dispatch({
      type: "SET_LOADİNG",
    });
  };

  const clearUsers = () => {
    dispatch({ type: "CLEAR_USERS" });
  };

  return (
    <UsersContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUser,
        clearUsers,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
