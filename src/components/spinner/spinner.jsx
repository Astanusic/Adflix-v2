import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faSpinner);

const Spinner = () => {
  return (
    <FontAwesomeIcon icon="spinner" pulse size="5x" className="fa-faSpinner" />
  );
};

export { Spinner };
