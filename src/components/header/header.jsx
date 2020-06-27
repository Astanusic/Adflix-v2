import React, { Component } from "react";
import Container from "../Generic/container";
import { SearchBar } from "../index";
import { ReactComponent as Logo } from "../../assets/main-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTimes,
  faChevronDown,
  faPlayCircle,
  faHeart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import { TimelineLite, TweenMax } from "gsap";

import "./header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.searchIcon = null;
    this.closeIcon = null;
    this.searchBar = null;
    this.navLinks = [];
    this.myTween = new TimelineLite({ paused: true });
    this.closeSearchBar = this.closeSearchBar.bind(this);
    this.state = {
      innerWidth: window.innerWidth,
      references: [
        {
          id: "0837a8f79f4657150c482f9400daea0b",
          name: "Acceuil",
        },
        {
          id: "73000dccc18fd56c9941ee432a96708d",
          name: "Les mieux notés",
        },
        {
          id: "33c6b55a4abad5eeaa6b29a3aeee8213",
          name: "Se connecter",
        },
        {
          id: "7e5baef968a2c8ad3254169126247546",
          name: "S'enregistrer",
        },
      ],
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({ innerWidth: window.innerWidth });
      console.log(this.state.innerWidth);
    });

    this.navLinks[0].classList.add("active");
    this.myTween.staggerTo(
      this.navLinks,
      0.5,
      { autoAlpha: 0, display: "none" },
      0.25
    );
    this.myTween.to(this.searchBar, 0.5, {
      autoAlpha: 1,
      display: "flex",
      transform: "translateY(50)",
      yPercent: -50,
    });
  }

  switchToCloseIcon() {
    TweenMax.to(this.closeIcon, 0.5, { opacity: 1, display: "block" });
    TweenMax.to(this.searchIcon, 0.5, { opacity: 0, display: "none" });
  }

  switchToSearchIcon() {
    TweenMax.to(this.searchIcon, 0.5, { opacity: 1, display: "block" });
    TweenMax.to(this.closeIcon, 0.5, { opacity: 0, display: "none" });
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
    const { innerWidth } = this.state;
    return (
      <header className="header">
        <Container className="wrapper">
          <a className="logo" href="">
            <Logo />
          </a>
          {innerWidth > 960 ? (
            <div className="player-logo">
              <FontAwesomeIcon icon={faHeart} size="2x" />
            </div>
          ) : null}

          {innerWidth <= 960 ? (
            <>
              <div className="header--log">
                <FontAwesomeIcon icon={faHeart} size="2x" />

                {/* <FontAwesomeIcon icon={faChevronDown} size="2x" /> */}
              </div>
              <div className="hamburger-bar">
                <FontAwesomeIcon icon={faBars} size="2x" />
              </div>
            </>
          ) : (
            <></>
          )}
          <div className="searchBar" ref={(div) => (this.searchBar = div)}>
            <SearchBar onSearchClick={this.props.onSearchClick} />
          </div>
          <div className="searchBar-btn" ref={(div) => (this.searchIcon = div)}>
            <FontAwesomeIcon
              className="header--searchIcon"
              icon={faSearch}
              size="2x"
              onClick={() => {
                this.myTween.play();
                this.switchToCloseIcon();
              }}
            />
          </div>
          <div
            className="header--closeIcon__container"
            ref={(div) => (this.closeIcon = div)}
          >
            <FontAwesomeIcon
              className="header--closeIcon"
              icon={faTimes}
              size="2x"
              onClick={() => {
                this.myTween.reverse();
                this.switchToSearchIcon();
              }}
            />
          </div>
          <nav className="header--nav">
            {this.state.references.map((el, index) => (
              <a
                key={el.id}
                className="header--nav__item"
                href="#"
                ref={(a) => (this.navLinks[index] = a)}
              >
                {el.name}
              </a>
            ))}
          </nav>
        </Container>
      </header>

      // <header className="header">
      //   <Logo className="header--logo" />

      //   <nav className="header--nav">
      //     <a className="header--nav__item active" href="#" ref={this.myRef1}>
      //       Acceuil
      //     </a>
      //     <a className="header--nav__item" href="#" ref={this.myRef2}>
      //       Les mieux notés
      //     </a>
      //     <a className="header--nav__item" href="#" ref={this.myRef3}>
      //       Se connecter
      //     </a>
      //     <a className="header--nav__item" href="#" ref={this.myRef4}>
      //       S'enregistrer
      //     </a>
      //   </nav>
      //   <div className="searchBar" ref={this.searchBar}>
      //     <SearchBar onSearchClick={this.props.onSearchClick} />
      //   </div>
      //   <div className="searchIcon--container" ref={this.searchIcon}>
      //     <FontAwesomeIcon
      //       className="header--searchIcon"
      //       icon={faSearch}
      //       onClick={this.hideAll}
      //     />
      //   </div>
      //   <div className="header--closeIcon__container" ref={this.closeIcon}>
      //     <FontAwesomeIcon
      //       className="header--closeIcon"
      //       icon={faTimes}
      //       onClick={this.closeSearchBar}
      //     />
      //   </div>
      //   <div className="header--log">
      //     <p>Liste des films à regarder</p>{" "}
      //     <FontAwesomeIcon className="arrowIcon" icon={faChevronDown} />
      //   </div>
      // </header>
    );
  }
}

export { Header };
