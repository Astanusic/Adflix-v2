import React, { Component } from "react";
import { Poster } from "../index";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

import "./posterlist.scss";

let wish;

class PosterList extends Component {
  renderPoster = () => {
    return this.props.movies.map((movie) => {
      const imgSrc = `${IMAGE_BASE_URL}/${POSTER_SIZE}/${movie.poster_path}`;
      wish = false;
      return (
        <Poster
          key={movie.id}
          imgSrc={imgSrc}
          wished={wish}
          movie={movie}
          mTitle={movie.title}
          mDesc={movie.overview}
        />
      );
    });
  };
  render() {
    return (
      <section className="posterlist">
        <h2 className="posterlist--title">Derniers Ajouts</h2>
        <div className="posterlist--grid">{this.renderPoster()}</div>
      </section>
    );
  }
}

export { PosterList };
