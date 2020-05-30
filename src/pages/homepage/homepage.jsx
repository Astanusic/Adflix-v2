import React, { Component } from "react";
import { Banner, PosterList, LoadButton } from "../../components";
import "./homepage.scss";

class HomePage extends Component {
  render() {
    const { mTitle, mDesc, image, movies, loading } = this.props;
    return (
      <section>
        <Banner title={mTitle} overview={mDesc} imgSrc={image} />
        <PosterList movies={movies} />
        <LoadButton
          onButtonClick={this.props.onButtonClick}
          loading={loading}
        />
      </section>
    );
  }
}

export { HomePage };
