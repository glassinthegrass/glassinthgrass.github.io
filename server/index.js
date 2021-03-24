const express = require('express')
const pokeCtrl = require('./Controllers/pokeCtrl')
const app = express()
const port = 3111
app.use(express.json())

app.get('/api/pokemon', pokeCtrl.getPokemon)
app.get('/api/selected', pokeCtrl.getSelected)
app.post('/api/selected',pokeCtrl.addSelected)
app.put('/api/selected',pokeCtrl.editSelected)
app.delete('/api/selected',pokeCtrl.clear)
app.listen(port, () => console.log(`You're in the ${port} now boy`))