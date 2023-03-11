import Navbar from "./components/Navbar";
import UserList from "./components/UserList";

import React, { Component } from "react";
import Search from "./components/Search";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }
  searchUser = (keyword) => {
    this.setState({ loading: true });

    setTimeout(() => {
      fetch("https://api.github.com/search/users?q=" + keyword)
        .then((Response) => Response.json())
        .then((data) => this.setState({ users: data.items, loading: false }));
    }, 1000);
  };
  render() {
    return (
      <div>
        <Navbar icon="bi bi-github" title="Github Finder" />
        <Search searchUser={this.searchUser} />
        <div className="container mt-3">
          <UserList users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
