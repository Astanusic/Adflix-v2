import React, { useState } from "react";

import "./searchBar.scss";

const SearchBar = ({ className }) => {
  const [value, setValue] = useState("");

  return (
    <div className="searchBar--container">
      <input
        className={"searchBar--input " + (className ? className : "")}
        type="text"
        placeholder="Rechercher un film..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div
        onClick={() => this.props.onSearchClick(value)}
        className="searchBar--submit"
      ></div>
    </div>
  );
};

export { SearchBar };
