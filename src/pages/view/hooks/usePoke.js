import { useState, useEffect } from "react";
import { api } from "../../../lib/axios";

export function usePokemonData() {
    // State variables
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Get Pokémon data from the API
    async function fetchPokemon() {
        try {
            // Fetch first 151 Pokémon
            const response = await api.get("/pokemon?limit=151Y&offset=0");

            // Format the data to include image URLs
            const formattedData = response.data.results.map((pokemon) => {
                const id = pokemon.url.split("/")[6];
                const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
                return {
                    id,
                    name: pokemon.name,
                    image,
                }
            })

            // Check for response errors
            if (response.status !== 200) {
                throw new Error("Failed to fetch Pokémon data");
            }

            setPokemonData(formattedData);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    // Fetch data on component mount
    useEffect(() => {
        fetchPokemon();
    }, []);

    // Return state variables
    return { pokemonData, loading, error };
}
