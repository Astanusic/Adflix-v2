import React, { Component } from "react";
import { Poster } from "../index";

import "./posterlist.scss";

let wish;

class PosterList extends Component {
  renderPoster = () => {
    return this.props.movies.map((movie) => {
      const imgSrc = movie.poster_path;
      wish = true;
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
