import React, { Component } from "react";
import Swiper from "react-id-swiper";

import "./swiper-slider.scss";

const params = {
  slidesPerView: 3,
  grabCursor: true,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
};

class SwiperSlider extends Component {
  componentDidMount() {}
  render() {
    return (
      <Swiper {...params}>
        <div className="slide">slide #1</div>
        <div>Slide #2</div>
        <div>Slide #3</div>
        <div>Slide #4</div>
        <div>Slide #5</div>
      </Swiper>
    );
  }
}

export { SwiperSlider };
