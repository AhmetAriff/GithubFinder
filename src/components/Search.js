import React, { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }

  onChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.keyword === "") {
      this.props.displayAlert("Anahtar kelime giriniz", "danger");
    } else {
      this.props.searchUser(this.state.keyword);
      this.setState({ keyword: "" });
    }
  };
  render() {
    return (
      <div className="container my-3">
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              value={this.state.keyword}
              type="text"
              onChange={this.onChange}
              className="form-control"
              placeholder="Anahatar Kelime"
            />
            <button className="btn btn-primary" type="submit">
              Ara
            </button>
          </div>
        </form>
        {this.props.showClearButton && (
          <button
            onClick={this.props.clearResult}
            className="btn  btn-outline-danger mt-2 btn-block "
          >
            Sonuçları temizle
          </button>
        )}
      </div>
    );
  }
}

export default Search;
