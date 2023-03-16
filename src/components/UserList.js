import React, { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import Loading from "./Loading";
import User from "./User";

const UserList = () => {
  const { loading, users } = useContext(UsersContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
