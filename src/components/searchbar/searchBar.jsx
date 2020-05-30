import React, { Component } from "react";

import "./searchBar.scss";

class SearchBar extends Component {
  state = {
    value: "",
  };
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="searchBar--container">
        <input
          className="searchBar--input"
          type="text"
          placeholder="Rechercher un film"
          value={value}
          onChange={this.handleChange}
        />
        <div
          onClick={() => this.props.onSearchClick(value)}
          className="searchBar--submit"
        ></div>
      </div>
    );
  }
}

export { SearchBar };
