import React, { Component } from "react";
import { Spinner } from "../index";

import "./loadbutton.scss";

class LoadButton extends Component {
  render() {
    return (
      <>
        {this.props.loading ? (
          <div className="spinner--wrapper">
            <Spinner />
          </div>
        ) : (
          <div onClick={this.props.onButtonClick} className="loadButton">
            <h5 className="loadButton--text">Voir Plus</h5>
          </div>
        )}
      </>
    );
  }
}

export { LoadButton };
