import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-base-content mb-4">
                    404
                </h1>

                <h2 className="text-2xl font-semibold text-base-content mb-2">
                    Page Not Found
                </h2>

                <p className="text-base-content/70 mb-6">
                    The page you are looking for does not exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="btn btn-warning"
                >
                    Go back to Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound
