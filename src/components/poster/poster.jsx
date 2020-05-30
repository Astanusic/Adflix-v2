import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";

import "./poster.scss";

class Poster extends Component {
  state = {
    hover: false,
  };

  showOverlay = () => {
    if (this.state.hover) {
      return;
    }
    this.setState({ hover: true });
  };

  hideOverlay = () => {
    this.setState({ hover: false });
  };
  remove = () => {
    //redux need
    console.log("remove avec redux");
  };
  add = () => {
    //redux need
    console.log("add avec redux");
  };

  render() {
    return (
      <div
        className="poster for-poster-hover"
        onMouseEnter={this.showOverlay}
        onMouseLeave={this.hideOverlay}
      >
        <img className="poster--image" src={this.props.imgSrc} alt="poster" />
        {this.state.hover ? (
          <div className="poster--overlay">
            {this.props.wished ? (
              <>
                <p className="poster--overlay__title" onClick={this.remove}>
                  Supprimer
                </p>
                <FontAwesomeIcon className="poster--icon" icon={faHeart} />
              </>
            ) : (
              <>
                <p className="poster--overlay__title" onClick={this.add}>
                  Ajouter
                </p>
                <FontAwesomeIcon
                  className="poster--icon_not"
                  icon={emptyHeart}
                />
              </>
            )}
          </div>
        ) : null}
      </div>
    );
  }
}

export { Poster };
