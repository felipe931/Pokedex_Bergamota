const express = require("express");

const pokemonController = require("../controllers/PokemonController");

const router = express.Router();

router.post("/pokemons", pokemonController.createPokemons);
router.get("/pokemons", pokemonController.listPokemons);
router.patch("/pokemons/:id", pokemonController.updatePokemonById);
router.delete("/pokemons/:id", pokemonController.deletePokemonById);
module.exports = router;
