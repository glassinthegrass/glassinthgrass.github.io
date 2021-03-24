import React, { Component } from "react";

class Card extends Component {
  handleClick = () => {
    const {pokemon} = this.props
let newPokemon ={...pokemon}
  this.props.add(newPokemon)
  this.props.get()
    }
  render() {
    const{pokemon} = this.props
    return (
      <section id="cardHeader" onClick={this.handleClick}><a>
        <div id='cardContent'>
          <img
            className="icon"
            src='https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg'
            alt={pokemon.frontShinyPic}
          />
          <h4 id='cardText'>#{this.props.pokemon.id} {this.props.pokemon.name}</h4>
          <img className='icon2' src={pokemon.dreamWorldPic} alt={pokemon.frontShinyPic}/>
        </div>
      </a></section>
    );
  }
}

export default Card