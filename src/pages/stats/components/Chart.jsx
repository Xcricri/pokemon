import React from "react"
import { useParams } from "react-router-dom"
import { useChart } from "../hooks/useChart"
import { Link } from "react-router-dom"

// ICONS
import {
    FaHeart,
    FaFistRaised,
    FaShieldAlt,
    FaBolt,
    FaMagic,
    FaRunning,
    FaArrowLeft
} from "react-icons/fa"

const statIcons = {
    hp: <FaHeart className="text-red-500 text-2xl" />,
    attack: <FaFistRaised className="text-orange-500 text-2xl" />,
    defense: <FaShieldAlt className="text-blue-500 text-2xl" />,
    "special-attack": <FaMagic className="text-purple-500 text-2xl" />,
    "special-defense": <FaShieldAlt className="text-teal-500 text-2xl" />,
    speed: <FaRunning className="text-green-500 text-2xl" />,
    back: <FaArrowLeft className="text-gray-300 text-2xl" />,
}

const Chart = () => {
    const { id } = useParams()
    const { stats, name, loading, error, image } = useChart(id)

    if (loading) return <p className="text-center">Loading...</p>
    if (error) return <p className="text-center text-error">Error</p>
    
    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="card bg-base-200 shadow-xl">

                <div className="card-body">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* LEFT → POKEMON */}
                        <div className="flex flex-col items-center justify-center rounded-xl p-6 text-white relative">
                            <Link to={'/'} className="self-start mb-2">
                                {statIcons.back}
                            </Link>

                            <figure className="rounded-full p-4 justify-center items-center bg-gradient-to-b from-gray-800 to-gray-700">
                                <img
                                    src={image}
                                    alt={name}
                                    className="w-40 h-40 object-contain"
                                />
                            </figure>

                            <h1 className="text-4xl font-bold capitalize mt-4">
                                {name}
                            </h1>

                        </div>

                        {/* RIGHT → STATS */}
                        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">

                            {stats.map((stat) => (
                                <div
                                    key={stat.stat.name}
                                    className="card bg-base-300 shadow-md p-4"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        {statIcons[stat.stat.name]}
                                        <h2 className="font-semibold uppercase">
                                            {stat.stat.name.replace('-', ' ')}
                                        </h2>
                                    </div>

                                    <div className="text-2xl font-bold text-primary">
                                        {stat.base_stat}
                                    </div>


                                    <progress
                                        className="progress progress-primary w-full mt-2"
                                        value={stat.base_stat}
                                        max="255"
                                    />

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Chart
