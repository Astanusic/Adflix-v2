import React from "react";
import Swiper from "react-id-swiper";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

import "swiper/css/swiper.min.css";
import "./swiper-slider.scss";

import Container from "../Generic/container";

const SwiperSlider = ({ movies }) => {
  const params = {
    loop: true,
    effect: "coverflow",
    slidesPerView: "auto",
    centeredSlides: true,
    grabCursor: true,
    initialSlide: 3,
    coverflowEffect: {
      rotate: 25,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
    containerClass: "swiper-container",
    slideClass: "swiper-slider",
  };

  return (
    <Container className="swiper-main_container">
      {movies.length > 0 ? (
        <Swiper {...params}>
          {movies.map((movie) => {
            const imgSrc = `${IMAGE_BASE_URL}/${POSTER_SIZE}/${movie.poster_path}`;
            return (
              <div key={movie.id} className="swiper-slide">
                <img src={imgSrc} alt="" />
              </div>
            );
          })}
        </Swiper>
      ) : (
        false
      )}
    </Container>
  );
};

export default SwiperSlider;
