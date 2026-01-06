import React from "react";
import { Link } from "react-router-dom";
import { FaHeart  } from "react-icons/fa";

const About = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center py-12 px-4">
            {/* Judul */}

                {/* Kartu Profil */}
                <div className="card w-full max-w-md shadow-xl bg-base-200">
                    
                    <div className="card-body items-center text-center">

                        <div className="avatar mb-4">
                            
                            <div className="w-24 rounded-full ">
                                <img
                                    src="https://avatars.githubusercontent.com/u/219052674?v=4"
                                    alt="Profile"
                                />
                            </div>
                        </div>

                        <h2 className="card-title font-bold">Xcricri</h2>
                        <p className="text-base-content">
                            Hi! I'm Xcricri. Thank you for visiting this simple website. We would also like to thank PokeApi for providing an excellent Pokémon API.
                            <br />
                            <FaHeart className="inline text-red-500" /> 
                        </p>
                    </div>
                </div>

                <div className="card w-full max-w-md shadow-xl bg-base-200 mt-4">
                    <div className="card-body items-center text-center">
                        <Link to="https://pokeapi.co/" className="text-blue-500 hover:underline">
                            <span className="font-bold">Get API In Here:</span> https://pokeapi.co/
                        </Link>
                    </div>
                </div>

                <div className="card w-full max-w-md shadow-xl bg-base-200 mt-4">
                    <div className="card-body items-center text-center">
                        <Link to="https://github.com/Xcricri" className="text-blue-500 hover:underline">
                            <span className="font-bold">Visit my GitHub:</span> https://github.com/Xcricri
                        </Link>
                    </div>
                </div>

                <div className="card w-full max-w-md shadow-xl bg-base-200 mt-4">
                    <div className="card-body items-center text-center">
                        <Link to={'/'}>
                            <span className="font-bold text-blue-500 hover:underline">Back to Home</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
