import React, { Component } from "react";
import axios from 'axios'
// import { addSelected } from "../../server/Controllers/pokeCtrl";
// import SearchBar from "./SearchBar.js";
// import Header from "./Header.js";

class Card extends Component {
  constructor(props) {
    super(props);
    };
  handleClick = () => {
    const {pokemon} = this.props
let newPokemon ={...pokemon}
  this.props.add(newPokemon)
    }
  render() {

    return (
      <div id="cardHeader" onClick={this.handleClick}>
        <div id='cardContent'>
          <img
            className="icon"
            src={this.props.pokemon.frontPic}
            alt={this.props.pokemon.name}
          />
          #{this.props.pokemon.id} ||| {this.props.pokemon.name}
        </div>
      </div>
    );
  }
}

export default Card