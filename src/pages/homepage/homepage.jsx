import React, { Component } from "react";
import { Banner, PosterList, LoadButton } from "../../components";
import SwiperSlider from "../../components/swiper-slider/swiper-slider";
import SwiperNav from "../../components/swiper-nav/swiper-nav";
import "./homepage.scss";

class HomePage extends Component {
  render() {
    const {
      bannerTitle,
      bannerDesc,
      bannerImage,
      initialMovies,
      loading,
    } = this.props;
    return (
      <section>
        <SwiperNav />
        <SwiperSlider movies={initialMovies} />
        <Banner
          title={bannerTitle}
          overview={bannerDesc}
          imgSrc={bannerImage}
        />
        <PosterList movies={initialMovies} />
        <LoadButton
          onButtonClick={this.props.onButtonClick}
          loading={loading}
        />
      </section>
    );
  }
}

export { HomePage };
