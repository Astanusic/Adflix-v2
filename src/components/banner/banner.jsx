import React, { Component } from "react";

import "./banner.scss";

class Banner extends Component {
  render() {
    return (
      <div
        className="banner"
        style={{ backgroundImage: `url(${this.props.imgSrc}) ` }}
      >
        <div className="banner--text">
          <h2>{this.props.title}</h2>
          <p>{this.props.overview}</p>
        </div>
      </div>
    );
  }
}

export { Banner };
