import { createContext } from "react";
import { useUpdateStudentFormValidation } from "../hooks/formValidation";

const StudentContext = createContext();

const StudentProvider = (props) => {
    const name = "Dj";
    const setName = (value) => {
        return value;
    };

    const updateStudent = async (formFields, files) => {
        // validate using own hook
        const errors = useUpdateStudentFormValidation(formFields);
        if (errors.length > 0) {
            let error = "";
            errors.forEach((e) => (error = error + " " + e));
            return {
                status: "error",
                title: "Error",
                description: error,
            };
        }

        // create a formdata
        const formData = new FormData();
        formData.append("textData", JSON.stringify(formFields));

        formData.append("files", files.img);
        formData.append("files", files.resume);

        // make a api call
        let response = await fetch(
            `${process.env.API_HOST_URL}api/students/update`,
            {
                method: "POST",
                body: formData,
            }
        );

        response = await response.json();

        if (response.success) {
            return {
                status: "success",
                title: "Profile updated",
                description: "",
            };
        }

        // failed
        return {
            status: "error",
            title: "Error",
            description: response.error,
        };
    };
    return (
        <StudentContext.Provider value={{ name, setName, updateStudent }}>
            {props.children}
        </StudentContext.Provider>
    );
};

export { StudentProvider, StudentContext };
