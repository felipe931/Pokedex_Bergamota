import axios from "axios";

export async function getPokemonData() {
    const { data } = await axios.get("https://localhost:8000;/api/pokemon");
    return data;
}
