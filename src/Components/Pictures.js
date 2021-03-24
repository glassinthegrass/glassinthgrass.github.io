import React, { Component } from "react";

class Pictures extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <section >
          
          <img className='dreamWorld' src={pokemon.dreamWorldPic} alt={pokemon.frontShinyPic} />
      </section>
    );
  }
}

export default Pictures;
