import React from "react";
import Container from "../Generic/container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faFilm, faChild } from "@fortawesome/free-solid-svg-icons";
import { faGrinHearts } from "@fortawesome/free-regular-svg-icons";

import "./swiper-nav.scss";

const SwiperNav = () => {
  return (
    <div className="swiper-nav">
      <Container className="swiper-nav_wrapper">
        <div className="swiper-nav_btn">
          <FontAwesomeIcon icon={faFire} size="2x" />
          <p>Populaire en ce moment</p>
        </div>
        <div className="swiper-nav_btn">
          <FontAwesomeIcon icon={faFilm} size="2x" />
          <p>Sorties Ciné</p>
        </div>
        <div className="swiper-nav_btn">
          <FontAwesomeIcon icon={faGrinHearts} size="2x" />
          <p>Les plus likés</p>
        </div>
        <div className="swiper-nav_btn">
          <FontAwesomeIcon icon={faChild} size="2x" />
          <p>Films pour enfants</p>
        </div>
      </Container>
    </div>
  );
};

export default SwiperNav;
