import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { presetData } from "./Components/api/localStorageApi";
import { ThemeProvider } from "./context/ThemeProvider";
import { BrowserRouter as Router} from "react-router-dom";


presetData();

ReactDOM.render(
    <Router>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Router>,
    document.getElementById("root")
);
