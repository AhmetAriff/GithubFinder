import React, { useContext, useState } from "react";
import { UsersContext } from "../context/UsersContext";

const Search = ({ displayAlert }) => {
  const [keyword, setKeyword] = useState("");
  const { searchUser, users, clearUsers } = useContext(UsersContext);

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (keyword === "") {
      displayAlert("Anahtar kelime giriniz", "danger");
    } else {
      searchUser(keyword);
      setKeyword("");
    }
  };

  return (
    <div className="container my-3">
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <input
            value={keyword}
            type="text"
            onChange={onChange}
            className="form-control"
            placeholder="Anahatar Kelime"
          />
          <button className="btn btn-primary" type="submit">
            Ara
          </button>
        </div>
      </form>
      {users.length > 0 && (
        <button
          onClick={clearUsers}
          className="btn  btn-outline-danger mt-2 btn-block "
        >
          Sonuçları temizle
        </button>
      )}
    </div>
  );
};

export default Search;
