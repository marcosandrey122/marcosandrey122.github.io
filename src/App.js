import { 
    BrowserRouter,
    Routes,
    Route, } from "react-router-dom";

import { Dashboard } from "./dashboard/App";
import { Menu } from "./menu/main";

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Menu />} />
                    <Route path="dashboard" element={<Dashboard/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}