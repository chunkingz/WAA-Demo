import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Weathers from "./Weathers";
import AddJob from "./AddJob";
import WeatherDetail from "./WeatherDetail";

export const ThemeColorContext = React.createContext();

const Dashboard = () => {
    const [themeColorState, setThemeColorState] = useState("navy");

    return (<>
        <Router>
        <ThemeColorContext.Provider value={themeColorState}>
            <Routes>
                <Route path="/weathers" element={<Weathers />} />
                <Route path="/weathers/:id" element={
                    <WeatherDetail setTheme={setThemeColorState} />} />
                <Route path="/add-job" element={<AddJob />} />
            </Routes>
            </ThemeColorContext.Provider>
            <br />
            <div>
                <Link to="/weathers">View weathers</Link> <br />
                <Link to="/add-job">Add Job</Link>
            </div>
        </Router>
    </>
    );
}

export default Dashboard;