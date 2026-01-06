import React from 'react';
import { Link } from 'react-router-dom'
import { useSearchPokemon } from '../hooks/useSearch';

export default function Search() {
    const { pokemonList, handleSearch, loading, error } = useSearchPokemon();   

    
    if (loading) return <div className='text-center'>Loading...</div>;
    if (error) return <div className='text-center text-red-500'>Error: {error.message}</div>;
    return (
        <>
            {/* Search Bar */}
            <div className="w-full max-w-md mx-auto my-6 p-4">
                <form onSubmit={handleSearch}>
                    <label className="input w-full flex items-center gap-2 rounded-md">
                        <svg
                            className="h-[1em] opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.3-4.3" />
                            </g>
                        </svg>

                        <input
                            type="search"
                            name="search"
                            required
                            placeholder="Search Pokémon"
                            className="flex-1"
                        />
                    </label>
                </form>

                {/* Results */}
                <div className="max-full  mx-auto ">
                    <div className="my-12 mx-2 grid grid-cols-1 md:grid-cols-1">
                        {pokemonList.map((pokemon) => (
                            <Link
                                key={pokemon.id}
                                to={`/stats/${pokemon.id}`}
                                className="hover-3d cursor-pointer "
                            >
                                <figure className="card-body rounded-lg">
                                    <img
                                        src={pokemon.sprites.front_default}
                                        alt={pokemon.name}
                                        className="w-24 h-24 sm:w-40 sm:h-40 md:w-36 md:h-36 object-contain rendering-pixelated flex mx-auto"
                                    />
                                    <h2 className="mt-2 text-lg font-semibold capitalize text-center">
                                        {pokemon.name}
                                    </h2>
                                </figure>
                                
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <div key={index}></div>
                                ))}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            

        </>
    );
}
