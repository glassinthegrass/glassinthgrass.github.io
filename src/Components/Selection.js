
import React, { Component } from 'react'
import Card from './Card'
import axios from 'axios'



class Selection extends Component {
    constructor(props){
        super(props)
    }
    
  render() {
      const {pokemon} = this.props
    let mappedPokemon = pokemon.map((pokemon, i) => {
      return(
      <Card key={i} pokemon={pokemon} add={this.props.add} />
    )
  });
    return (
      <div className="list">
        <h3>the gang</h3>
        {mappedPokemon}
      </div>
    );
  }
}
export default Selection