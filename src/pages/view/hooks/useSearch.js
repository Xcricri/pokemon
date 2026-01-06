import React, { useState } from 'react';
import { api } from "../../../lib/axios";

export function useSearchPokemon() {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function handleSearch(e) {
        e.preventDefault();
        const query = e.target.search.value.toLowerCase();
        try {
            const response = await api.get(`/pokemon/${query}`);
            setPokemonList([response.data]);

        } catch (error) {
            console.error('Error fetching Pokémon:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    return { pokemonList, handleSearch, loading, error };
}