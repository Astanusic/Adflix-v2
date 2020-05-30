import React, { Component } from "react";
import { Banner, PosterList, LoadButton } from "../../components";
import "./homepage.scss";

const movies = [
  {
    backdrop_path: require("../../assets/Fast_large.jpg"),
    poster_path: require("../../assets/Fast_small.jpg"),
    id: 475557,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam expedita reprehenderit perferendis ut rem numquam quaerat delectus nesciunt eos laborum?",
    title: "Fast And Furious",
  },
  {
    backdrop_path: require("../../assets/Fast_large.jpg"),
    poster_path: require("../../assets/Fast_small.jpg"),
    id: 475558,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam expedita reprehenderit perferendis ut rem numquam quaerat delectus nesciunt eos laborum?",
    title: "Fast And Furious",
  },
  {
    backdrop_path: require("../../assets/Fast_large.jpg"),
    poster_path: require("../../assets/Fast_small.jpg"),
    id: 475559,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam expedita reprehenderit perferendis ut rem numquam quaerat delectus nesciunt eos laborum?",
    title: "Fast And Furious",
  },
  {
    backdrop_path: require("../../assets/Fast_large.jpg"),
    poster_path: require("../../assets/Fast_small.jpg"),
    id: 475554,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam expedita reprehenderit perferendis ut rem numquam quaerat delectus nesciunt eos laborum?",
    title: "Fast And Furious",
  },
  {
    backdrop_path: require("../../assets/Fast_large.jpg"),
    poster_path: require("../../assets/Fast_small.jpg"),
    id: 475554,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam expedita reprehenderit perferendis ut rem numquam quaerat delectus nesciunt eos laborum?",
    title: "Fast And Furious",
  },
  {
    backdrop_path: require("../../assets/Fast_large.jpg"),
    poster_path: require("../../assets/Fast_small.jpg"),
    id: 475554,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam expedita reprehenderit perferendis ut rem numquam quaerat delectus nesciunt eos laborum?",
    title: "Fast And Furious",
  },
  {
    backdrop_path: require("../../assets/Fast_large.jpg"),
    poster_path: require("../../assets/Fast_small.jpg"),
    id: 475554,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam expedita reprehenderit perferendis ut rem numquam quaerat delectus nesciunt eos laborum?",
    title: "Fast And Furious",
  },
];

class HomePage extends Component {
  render() {
    return (
      <section>
        <Banner
          title="Fast and Furious"
          overview="Lorem LoremLoremLoremLorem"
          imgSrc={movies[0].backdrop_path}
        />
        <PosterList movies={movies} />
        <LoadButton loading={false} />
      </section>
    );
  }
}

export { HomePage };
