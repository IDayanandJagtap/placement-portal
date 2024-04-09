import { createContext, useState } from "react";
import { useSignupFormValidation } from "../hooks/formValidation";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("user") ? true : false
    );

    const login = async (userDetails) => {
        const { email, password, userType } = userDetails;
        let response = await fetch(
            `${import.meta.env.VITE_API_HOST_URL}auth/login`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, userType }),
            }
        );
        response = await response.json();

        if (response.success) {
            localStorage.setItem("user", JSON.stringify(response.data));
            setUser(response.data);
            setIsLoggedIn(true);
            return { status: "success", title: "Logged in", description: "" };
        }

        return {
            status: "error",
            title: "Failed to login",
            description: response.error,
        };
    };
    const signup = async (userDetails) => {
        const errors = useSignupFormValidation(userDetails);
        if (errors.length > 0) {
            return {
                status: "error",
                title: "Error",
                description: errors.join(" "),
            };
        }

        const { email, password, userType } = userDetails;
        let response = await fetch(
            `${import.meta.env.VITE_API_HOST_URL}auth/signup`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password, userType }),
                credentials: "include",
            }
        );
        response = await response.json();
        console.log(response);
        if (response.success) {
            // set in localStorage and set states
            localStorage.setItem("user", JSON.stringify(response.data));
            setUser(response.data);
            setIsLoggedIn(true);
            // return to show toast
            return { status: "success", title: "User registered" };
        }

        // failed
        return {
            status: "error",
            title: "Failed to signup",
            description: response.error,
        };
    };

    const logout = () => {
        // remove from locaStorage
        localStorage.removeItem("user");
    };
    return (
        <UserContext.Provider
            value={{ user, isLoggedIn, login, signup, logout }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
