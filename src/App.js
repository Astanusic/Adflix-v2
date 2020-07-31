import React, { Component } from "react";
import { HomePage } from "./pages";
import { Header } from "./components";
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE } from "./config";
import axios from "axios";

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
    initialMovies: [],
    image: null,
    bannerImage: null,
    mTitle: "",
    bannerTitle: "",
    bannerDesc: "",
    mDesc: "",
    activePage: 0,
    totalPages: 0,
    searchText: "",
  };
  async componentDidMount() {
    try {
      const {
        data: { results, page, total_pages },
      } = await this.loadMovies();
      this.setState({
        movies: results,
        initialMovies: results,
        loading: false,
        activePage: page,
        totalPages: total_pages,
        bannerImage: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
        mTitle: results[0].title,
        bannerTitle: results[0].title,
        bannerDesc: results[0].overview,
        mDesc: results[0].overview,
      });
    } catch (err) {
      console.log("err", err);
    }
  }
  loadMore = async () => {
    try {
      this.setState({ loading: true });
      const {
        data: { results, page, total_pages },
      } = await this.loadMovies();
      this.setState({
        movies: [...this.state.movies, ...results],
        initialMovies: [...this.state.movies, ...results],
        loading: false,
        activePage: page,
        totalPages: total_pages,
        image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
        mTitle: results[0].title,
        mDesc: results[0].overview,
      });
    } catch (err) {
      console.log("err", err);
    }
  };

  loadMovies = () => {
    const page = this.state.activePage + 1;
    const url = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=fr-FR`;
    return axios.get(url);
  };
  searchMovie = () => {
    const url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${this.state.searchText}&language=fr`;
    return axios.get(url);
  };
  handleSearch = (value) => {
    try {
      this.setState(
        { loading: true, searchText: value, image: null },
        async () => {
          const {
            data: { results, page, total_pages },
          } = await this.searchMovie();
          this.setState({
            movies: results,
            loading: false,
            activePage: page,
            totalPages: total_pages,
            image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
            mTitle: results[0].title,
            mDesc: results[0].overview,
          });
        }
      );
    } catch (err) {
      console.log("err", err);
    }
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
