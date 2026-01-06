import { Routes, Route } from "react-router-dom";

import Stats from "../pages/stats/Stats";
import Index from "../pages/view/Index";
import NotFound from "../pages/notfound/NotFound";
import About from "../pages/about/About";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/stats/:id" element={<Stats />} />
                
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}