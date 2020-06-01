import React, { Component } from "react";
import { SearchBar } from "../index";
import { ReactComponent as Logo } from "../../assets/main-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTimes,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import "./header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();
    this.myRef3 = React.createRef();
    this.myRef4 = React.createRef();
    this.searchBar = React.createRef();
    this.closeIcon = React.createRef();
    this.searchIcon = React.createRef();
    this.hideAll = this.hideAll.bind(this);
    this.closeSearchBar = this.closeSearchBar.bind(this);
    this.state = {
      references: [this.myRef1, this.myRef2, this.myRef3, this.myRef4],
    };
  }

  hideAll() {
    this.state.references.forEach((elem) =>
      elem.current.classList.add("hide-item")
    );
    this.searchBar.current.classList.add("active");
    this.closeIcon.current.classList.add("active");
    this.searchIcon.current.classList.add("active");
  }

  closeSearchBar() {
    this.state.references.forEach((elem) =>
      elem.current.classList.remove("hide-item")
    );
    this.searchBar.current.classList.remove("active");
    this.closeIcon.current.classList.remove("active");
    this.searchIcon.current.classList.remove("active");
  }

  render() {
    return (
      <header className="header">
        <Logo className="header--logo" />

        <nav className="header--nav">
          <a className="header--nav__item active" href="#" ref={this.myRef1}>
            Acceuil
          </a>
          <a className="header--nav__item" href="#" ref={this.myRef2}>
            Les mieux notés
          </a>
          <a className="header--nav__item" href="#" ref={this.myRef3}>
            Se connecter
          </a>
          <a className="header--nav__item" href="#" ref={this.myRef4}>
            S'enregistrer
          </a>
        </nav>
        <div className="searchBar" ref={this.searchBar}>
          <SearchBar onSearchClick={this.props.onSearchClick} />
        </div>
        <div className="searchIcon--container" ref={this.searchIcon}>
          <FontAwesomeIcon
            className="header--searchIcon"
            icon={faSearch}
            onClick={this.hideAll}
          />
        </div>
        <div className="header--closeIcon__container" ref={this.closeIcon}>
          <FontAwesomeIcon
            className="header--closeIcon"
            icon={faTimes}
            onClick={this.closeSearchBar}
          />
        </div>
        <div className="header--log">
          <p>Liste des films à regarder</p>{" "}
          <FontAwesomeIcon className="arrowIcon" icon={faChevronDown} />
        </div>
      </header>
    );
  }
}

export { Header };
