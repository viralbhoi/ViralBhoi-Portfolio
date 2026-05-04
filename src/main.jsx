import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import "./index.css";

import BootScreen from "./pages/BootScreen";
import DesktopScreen from "./pages/DesktopScreen";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AppProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                {/* {/* <Route path="/login" element={<LoginScreen />} /> */}
                <Route path="/desktop" element={<DesktopScreen />} />
            </Routes>
        </BrowserRouter>
    </AppProvider>,
);
