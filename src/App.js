import React, { Component } from "react";
import axios from "axios";
// import SearchBar from "./Components/SearchBar.js";
import Selection from "./Components/Selection.js";
import IndividualView from "./Components/IndividualView.js";

import "./App.css";

//https://pokeapi.co/api/v2/pokemon/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {},
      pokemon: [],
      name: "",
      id: "",
      height: "",
    };
  }
  componentDidMount() {
    this.getPokemon();
    console.log(this.state.pokemon)
  }

  addSelected = (pokemon) => {
    axios
      .post(`/api/selected`,{pokemon:pokemon})
      .then((res) => {
        this.setState({ selected: res.data });
      })
      .catch((err) => console.log(err));
  };
  getPokemon = () => {
    axios
      .get(`/api/pokemon`)
      .then((res) => this.setState({ pokemon: res.data }))
      .catch((err) => console.log(err));
  };

  getSelected = (id) => {
    axios
      .get(`/api/selected`)
      .then((res) => {
        this.setState({ selected: res.data });
      })
      .catch((err) => console.log(err));
  };
  editName = (id, newName) => {
    let body = { name: newName };
    axios
      .put(`/api/selected`, body)
      .then((res) => {
        this.setState({ selected: res.data})
      })
      .catch((err) => console.log(err));
  };
  closePerson = () => {
    axios
      .delete(`/api/selected`)
      .then((res) => {
        this.setState({ selected: res.data });
         this.getPokemon()
      })
      .catch((err) => console.log(err));
};

  render() {
    return (
      <div className="App">
        {/* <SearchBar/> */}
        <Selection
          id="selection"
          add={this.addSelected}
          close={this.closePerson}
          edit={this.editName}
          pokemon={this.state.pokemon}
        />
        <div id="viewer">
          <IndividualView
            selected={this.state.selected}
            getSelected={this.getSelected}
            edit={this.editName}
            close={this.closePerson}
          />
        </div>
      </div>
    );
  }
}
export default App;
