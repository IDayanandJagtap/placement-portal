import { createContext } from "react";

const StudentContext = createContext();

const StudentProvider = (props) => {
    const name = "Dj";
    const setName = (value) => {
        return value;
    };
    return (
        <StudentContext.Provider value={{ name, setName }}>
            {props.children}
        </StudentContext.Provider>
    );
};

export { StudentProvider, StudentContext };
