import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login, Home } from "../index";

export function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/jsjsj" element={<Home />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}