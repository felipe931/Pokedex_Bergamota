const Pokemon = require("../models/Pokemon");

async function createPokemons(req, res) {
    try {
        const { name, type, level } = req.body;

        const newPokemon = new Pokemon({
             name,
             type,
             level });

        const savedPokemon = await
         newPokemon.save();

        res.status(201)
        .json(savedPokemon);

    } catch (error) {
        res.status(400)
        .json({ message: error.message });
    }
}

async function listPokemons(req, res) {
    try {
        const pokemons = await Pokemon.find();
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(500).json({ "Error ao listar pokémons": error.message });
    }
}

async function updatePokemonById(req, res) {
    try {
        const updated = await Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
}

async function deletePokemonById(req, res) {
    try {
        const deleted = await Pokemon.findByIdAndDelete(req.params.id);
        res.json({ message: "Pokémon deletado com sucesso." });
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
}

module.exports = {
    createPokemons,
    listPokemons,
    updatePokemonById,
    deletePokemonById
};