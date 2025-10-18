import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
// import App from "./App";
import "./index.css";

import BootScreen from "./pages/BootScreen";
import DesktopScreen from "./pages/DesktopScreen";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AppProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BootScreen />} />
                {/* {/* <Route path="/login" element={<LoginScreen />} /> */}
                <Route path="/desktop" element={<DesktopScreen />} />
            </Routes>
        </BrowserRouter>
    </AppProvider>
);
