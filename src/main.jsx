import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { StudentProvider } from "./contextApi/StudentContext";

// Extend chakra theme
const theme = extendTheme({
    colors: {
        primary: {
            50: "#EEF2FF",
            100: "#E0E7FF",
            500: "#6366F1",
            600: "#4F46E5",
            800: "#3730A3",
            900: "#312E81",
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <StudentProvider>
                <App />
            </StudentProvider>
        </ChakraProvider>
    </React.StrictMode>
);
