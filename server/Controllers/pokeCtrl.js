const axios = require("axios");
let pokemon=[];
let selected = {}
let newPokemon ={}
module.exports = {
  getPokemon: (req, res) => {
      for(let i = 1;i<= 151;i++){
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(res => {
          const {data} = res
          newPokemon = {
            id: data.id,  
            name: data.name,
            frontPic: data.sprites.front_default,
            frontShinyPic: data.sprites.front_shiny,
            backPic: data.sprites.back_default,
            backShinyPic: data.sprites.back_shiny,
            dreamWorldPic: data.sprites.other.dream_world.front_default,
            height: data.sprites.height,
            weight: data.sprites.weight,
            abilities: [],
            types:[]
          }

          for(let i = 0; i< data.abilities.length;i++){
              newPokemon.abilities.push(data.abilities[i].ability.name)
          }
          for(let i = 0; i< data.types.length;i++){
              newPokemon.types.push(data.types[i].type.name)
          }
          pokemon.push(newPokemon)})
      .catch((err) => console.log(err));
  } 
    res.status(200).send(pokemon);
},
  addSelected: (req, res) => {
    const { pokemon } = req.body;
    selected = {...pokemon}
    res.status(200).send(selected);
  },

  getSelected: (req, res) => {
    res.status(200).send(selected);
  },

  editSelected: (req, res) => {
    const { name } = req.body;
    selected.name = name
    res.status(200).send(selected);
  },
  clear: (req, res) => {
    pokemon.unshift(selected);
    let clear = {}
    selected ={...clear};
    res.status(200).send(selected);
  },
};
