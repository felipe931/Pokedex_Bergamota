const express = require("express");
const cors = require("cors");

const connectDB = require("./db");

const pokemonRoutes = require("./routes/PokemonRoutes");

require('dotenv').config();


const connectDB = require("./db");


const PORT = process.env.PORT;
const app = express();

app.use("/api", pokemonRoutes);

connectDB();


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


connectDB();


app.listen(PORT, () => {
 console.log(`Server listening on port ${PORT}`);
});