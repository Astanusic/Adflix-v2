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
    this.heartIcon = null;
    this.searchBar = null;
    this.menuIcon = null;
    this.navLinks = [];
    this.myTween = new TimelineLite({ paused: true });
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
      { autoAlpha: 0, display: "none", y: -20 },
      0.2
    );
    this.myTween.to(this.searchBar, 0.5, {
      autoAlpha: 1,
      display: "flex",
      transform: "translateY(50)",
      yPercent: -50,
    });
  }

  switchToCloseIcon() {
    if (this.state.innerWidth > 960) {
      TweenMax.to(this.closeIcon, 0.5, { opacity: 1, display: "block" });
      TweenMax.to(this.searchIcon, 0.5, { opacity: 0, display: "none" });
    } else {
      TweenMax.to(this.heartIcon, 0.5, { opacity: 0 });
      TweenMax.to(this.menuIcon, 0.5, { opacity: 0 });
      TweenMax.to(this.closeIcon, 1, { opacity: 1, display: "block" });
      TweenMax.to(this.searchIcon, 0.5, { opacity: 0, display: "none" });
    }
  }

  switchToSearchIcon() {
    TweenMax.to(this.heartIcon, 0.5, { opacity: 1 });
    TweenMax.to(this.menuIcon, 0.5, { opacity: 1 });
    TweenMax.to(this.searchIcon, 0.5, { opacity: 1, display: "block" });
    TweenMax.to(this.closeIcon, 0.5, { opacity: 0, display: "none" });
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
              <div
                className="header--log"
                ref={(div) => (this.heartIcon = div)}
              >
                <FontAwesomeIcon icon={faHeart} size="2x" />

                {/* <FontAwesomeIcon icon={faChevronDown} size="2x" /> */}
              </div>
              <div
                className="hamburger-bar"
                ref={(div) => (this.menuIcon = div)}
              >
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
    );
  }
}

export { Header };
