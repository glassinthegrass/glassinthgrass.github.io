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
    let idx = pokemon.findIndex(e => e.id === +req.body.pokemon.id)
    selected = {...req.body.pokemon}
    pokemon.splice(idx,1)
    res.status(200).send(selected,pokemon);
  },

  getSelected: (req, res) => {
    res.status(200).send(selected);
  },

  editSelected: (req, res) => {
    const { name } = req.body;
    selected.name = name
    let index = pokemon.find(ele => ele.id === selected.id)
    pokemon[index].name = name
    res.status(200).send(pokemon[index]);
  },
  clear: (req, res) => {
  pokemon.splice(0,0,selected)
  selected = {}
    res.status(200).send(selected);
  },
  close:(req,res) => {
      selected ={}
      res.status(200).send(selected)
  }
};
