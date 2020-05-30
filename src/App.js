import React, { Component } from "react";
import { HomePage } from "./pages";
import { Header } from "./components";

import "./App.css";

class App extends Component {
  state = {
    loading: false,
    movies: [
      {
        poster_path: require("./assets/Fast_small.jpg"),
        id: 475557,
        overview:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam expedita reprehenderit perferendis ut rem numquam quaerat delectus nesciunt eos laborum?",
        title: "Fast And Furious",
      },
      {
        poster_path: require("./assets/Fast_small.jpg"),
        id: 475558,
        overview:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam expedita reprehenderit perferendis ut rem numquam quaerat delectus nesciunt eos laborum?",
        title: "Fast And Furious",
      },
      {
        poster_path: require("./assets/Fast_small.jpg"),
        id: 475559,
        overview:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam expedita reprehenderit perferendis ut rem numquam quaerat delectus nesciunt eos laborum?",
        title: "Fast And Furious",
      },
      {
        poster_path: require("./assets/Fast_small.jpg"),
        id: 475554,
        overview:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam expedita reprehenderit perferendis ut rem numquam quaerat delectus nesciunt eos laborum?",
        title: "Fast And Furious",
      },
      {
        poster_path: require("./assets/Fast_small.jpg"),
        id: 475554,
        overview:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam expedita reprehenderit perferendis ut rem numquam quaerat delectus nesciunt eos laborum?",
        title: "Fast And Furious",
      },
      {
        poster_path: require("./assets/Fast_small.jpg"),
        id: 475554,
        overview:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam expedita reprehenderit perferendis ut rem numquam quaerat delectus nesciunt eos laborum?",
        title: "Fast And Furious",
      },
      {
        poster_path: require("./assets/Fast_small.jpg"),
        id: 475554,
        overview:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam expedita reprehenderit perferendis ut rem numquam quaerat delectus nesciunt eos laborum?",
        title: "Fast And Furious",
      },
    ],
    image: require("./assets/Fast_large.jpg"),
    mTitle: "Fast and Furious",
    mDesc:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, voluptatibus.",
    activePage: 0,
    totalPages: 0,
    searchText: "",
  };
  handleSearch = (value) => {
    //lancer la recherche
    console.log("handleSearch", value);
  };
  loadMore = () => {
    //lancer une req
    console.log("load more");
  };
  render() {
    return (
      <div className="App">
        <Header onSearchClick={this.handleSearch} />
        <HomePage {...this.state} onButtonClick={this.loadMore} />
      </div>
    );
  }
}

export default App;
