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
            50: "#EFF6FF",
            100: "#DBEAFE",
            500: "#1E3A8A",
            600: "#2563EB",
            800: "#1E40AF",
            900: "#172554",
        },
        secondary: {
            50: "#F9FAFB",
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
