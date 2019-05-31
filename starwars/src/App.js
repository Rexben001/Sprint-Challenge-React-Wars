import React, { Component } from "react";
import "./App.css";

import StarWars from "./components/StarWars";
import Buttons from "./components/Button/Button";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      previous: null,
      next: null
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data.results);
        this.setState({
          starwarsChars: data.results,
          next: data.next,
          previous: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextButton = () => {
    if (this.state.next !== null) {
      this.getCharacters(this.state.next);
    }
  };

  previousButton = () => {
    if (this.state.previous !== null) {
      this.getCharacters(this.state.previous);
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Buttons
          nextFunc={this.nextButton}
          previousFunc={this.previousButton}
          next={this.state.next}
          previous={this.state.previous}
        />
        <StarWars starwarsChars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
