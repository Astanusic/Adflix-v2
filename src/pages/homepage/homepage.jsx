import React, { Component } from "react";
import { Banner, PosterList, LoadButton } from "../../components";
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
