import React, { Component } from "react";

import "./searchBar.scss";

class SearchBar extends Component {
  render() {
    return (
      <div className="searchBar--container">
        <input
          className="searchBar--input"
          type="text"
          placeholder="Rechercher un film"
        />
        <div className="searchBar--submit"></div>
      </div>
    );
  }
}

export { SearchBar };
