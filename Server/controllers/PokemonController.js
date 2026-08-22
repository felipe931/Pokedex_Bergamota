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

async function listPokemon(req, res) {
 try {
      const { name, type, minLevel, sortBy, order = "asc" } = req.query;
   const filter = {};


   if (name) {
     filter.name = new RegExp(name, "i");
   }


   if (type) {
     const typesArray = Array.isArray(type)
       ? type
       : type.split(",").map(t => t.trim());
     filter.type = { $in: typesArray };
   }


   if (minLevel) {
     filter.level = { $gte: Number(minLevel) };
   }

    const sortOption = {};
if (sortBy) {
  sortOption[sortBy] = order === "desc" ? -1 : 1;
}

 const pokemons = await Pokemon.find(filter).sort(sortOption);
   res.status(200).json(pokemons);
 } catch (error) {
   console.error("Erro ao listar Pokemons:", error.message);
   res.status(500).json({ error: "Erro ao listar Pokemons" });
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