import React, { Component } from "react";
import { Banner, PosterList, LoadButton } from "../../components";
import SwiperSlider from "../../components/swiper-slider/swiper-slider";
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
        <Banner
          title={bannerTitle}
          overview={bannerDesc}
          imgSrc={bannerImage}
        />
        <SwiperSlider movies={initialMovies} />
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
