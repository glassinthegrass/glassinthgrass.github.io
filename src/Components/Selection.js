
import React, { Component } from 'react'
import Card from './Card'



class Selection extends Component {
  render() {
      const {pokemon} = this.props


    let mappedPokemon = pokemon

    .map((pokemon, i) => {
      return(
        <section>
      <Card key={i} pokemon={pokemon} add={this.props.add} get={this.props.get} />
      </section>
    )
  });
    return (
      <div className="list">
        {mappedPokemon}
      </div>
    );
  }
}
export default Selection