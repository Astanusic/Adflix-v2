import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./loadbutton.scss";

library.add(faSpinner);

class LoadButton extends Component {
  render() {
    return (
      <>
        {this.props.loading ? (
          <div className="spinner--wrapper">
            <FontAwesomeIcon
              icon="spinner"
              pulse
              size="5x"
              className="fa-faSpinner"
            />
          </div>
        ) : (
          <div className="loadButton">
            <h5 className="loadButton--text">Voir Plus</h5>
          </div>
        )}
      </>
    );
  }
}

export { LoadButton };
