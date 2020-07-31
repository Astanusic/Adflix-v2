import React, { Component } from "react";
import Container from "../Generic/container";
import HeaderItem from "./components/header-item/header-item";
import { SearchBar } from "../index";
import { ReactComponent as Logo } from "../../assets/main-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTimes,
  faHeart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { TimelineLite, TweenMax } from "gsap";

import "./header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.searchIcon = null;
    this.closeIcon = null;
    this.heartIcon = null;
    this.menuIcon = null;
    this.searchBar = null;
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
      borderLeft: "1px solid white",
      // transform: "translateY(50)",
      // yPercent: -50,
    });
  }

  renderOnResolution() {
    if (this.state.innerWidth <= 960) {
      return (
        <>
          <div
            className="liked-list_mobile"
            ref={(div) => (this.heartIcon = div)}
          >
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className="hamburger-bar" ref={(div) => (this.menuIcon = div)}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </>
      );
    } else {
      return (
        <div className="liked-list_desktop">
          <FontAwesomeIcon icon={faHeart} size="2x" />
        </div>
      );
    }
  }

  renderNavLinks() {
    return this.state.references.map((el, index) => (
      <a
        key={el.id}
        className="nav-items"
        href="#"
        ref={(a) => (this.navLinks[index] = a)}
      >
        {el.name}
      </a>
    ));
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
    return (
      <header className="header">
        <Container className="wrapper">
          <HeaderItem>
            <a className="logo" href="">
              <Logo />
            </a>
          </HeaderItem>

          {this.renderOnResolution()}

          <HeaderItem
            className="seachBar-container"
            ref={(div) => (this.searchBar = div)}
          >
            {/* <div ref={(div) => (this.searchBar = div)}> */}
            <SearchBar
              className="searchBar"
              onSearchClick={this.props.onSearchClick}
            />
            {/* </div> */}
          </HeaderItem>
          {this.state.innerWidth > 960 ? (
            <HeaderItem
              className="search_icon"
              ref={(div) => (this.searchIcon = div)}
            >
              <FontAwesomeIcon
                icon={faSearch}
                size="2x"
                onClick={() => {
                  this.myTween.play();
                  this.switchToCloseIcon();
                }}
              />
            </HeaderItem>
          ) : (
            <HeaderItem
              className="search_icon"
              ref={(div) => (this.searchIcon = div)}
            >
              <FontAwesomeIcon
                icon={faSearch}
                onClick={() => {
                  this.myTween.play();
                  this.switchToCloseIcon();
                }}
              />
            </HeaderItem>
          )}

          {this.state.innerWidth > 960 ? (
            <HeaderItem
              className="close-icon_container"
              ref={(div) => (this.closeIcon = div)}
            >
              <FontAwesomeIcon
                icon={faTimes}
                size="2x"
                onClick={() => {
                  this.myTween.reverse();
                  this.switchToSearchIcon();
                }}
              />
            </HeaderItem>
          ) : (
            <HeaderItem
              className="close-icon_container"
              ref={(div) => (this.closeIcon = div)}
            >
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => {
                  this.myTween.reverse();
                  this.switchToSearchIcon();
                }}
              />
            </HeaderItem>
          )}

          <nav className="nav_container">{this.renderNavLinks()}</nav>
        </Container>
      </header>
    );
  }
}

export { Header };
