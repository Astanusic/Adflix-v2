import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";

import "./poster.scss";

class Poster extends Component {
  render() {
    return (
      <div className="poster">
        <img className="poster--image" src={this.props.imgSrc} alt="poster" />
        {this.props.hover ? (
          <div className="poster--overlay">
            {this.props.wished ? (
              <>
                <p className="poster--overlay__title">Supprimer</p>
                <FontAwesomeIcon className="poster--icon" icon={faHeart} />
              </>
            ) : (
              <>
                <p className="poster--overlay__title">Ajouter</p>
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
