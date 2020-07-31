import React, { Component } from "react";

import "./banner.scss";
import Container from "../Generic/container";

class Banner extends Component {
  render() {
    return (
      <Container className="banner-wrapper">
        <div
          className="banner"
          style={{ backgroundImage: `url(${this.props.imgSrc}) ` }}
        >
          <div className="banner--text">
            <h2>{this.props.title}</h2>
            <p>{this.props.overview}</p>
          </div>
        </div>
      </Container>
    );
  }
}

export { Banner };
