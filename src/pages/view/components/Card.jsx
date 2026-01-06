import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { usePokemonData } from '../hooks/usePoke';

const Card = () => {
    const { pokemonData, loading, error } = usePokemonData();
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 12;

    
    const pageCount = Math.ceil(pokemonData.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;
    const currentPokemons = pokemonData.slice(offset, offset + itemsPerPage);

    const handlePageClick = (selectedItem) => {
        setCurrentPage(selectedItem.selected);
    };

    if (loading) return <div className='text-center'>Loading...</div>;
    if (error) return <div className='text-center text-red-500'>Error: {error.message}</div>;
    
    return (
        <>
            <div className="my-2 mx-2 grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
                {currentPokemons.map((pokemon) => (
                    <Link
                        key={pokemon.id}
                        to={`/stats/${pokemon.id}`}
                        className="hover-3d cursor-pointer"
                    >
                        <div className="card-body flex flex-col items-center rounded-lg">
                            <figure>
                                <img
                                    src={pokemon.image}
                                    alt={pokemon.name}
                                    className="w-24 h-24 sm:w-40 sm:h-40 md:w-36 md:h-36 object-contain rendering-pixelated"
                                />
                            </figure>
                            <h2 className="mt-2 text-lg font-semibold capitalize text-center">
                                {pokemon.name}
                            </h2>
                        </div>

                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index}></div>
                        ))}
                    </Link>
                ))}
            </div>

            {/* DaisyUI + React Paginate */}
            <div className="flex justify-center mt-6 mb-6">
                <ReactPaginate
                    previousLabel={"«"}
                    breakLabel={"..."}
                    nextLabel={"»"}
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName={"join"} // DaisyUI group container
                    pageClassName={"join-item"}
                    pageLinkClassName={"btn btn-sm"} 
                    activeClassName={"btn btn-sm btn-primary"} 
                    previousClassName={"join-item"}
                    previousLinkClassName={"btn btn-sm"}
                    nextClassName={"join-item"}
                    nextLinkClassName={"btn btn-sm"}
                    breakClassName={"join-item"}
                    breakLinkClassName={"btn btn-sm btn-disabled"}
                />
            </div>
        </>
    );
};

export default Card;
