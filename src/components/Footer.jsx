import React from 'react'


export default function Footer() {
    return (
        <>
            <footer className="footer sm:footer-horizontal bg-base-200 text-gray-700 items-center p-4 flex justify-center h-20 dark:text-neutral-content">
                <aside className="grid-flow-col items-center">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                
            </footer>
        </>
    )
}
