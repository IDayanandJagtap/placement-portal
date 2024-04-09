import { createContext, useState } from "react";
import { useUpdateStudentFormValidation } from "../hooks/formValidation";

const StudentContext = createContext();

const StudentProvider = (props) => {
    const fetchMyInfo = async () => {
        try {
            let response = await fetch(
                `${import.meta.env.VITE_API_HOST_URL}api/students/getme`,
                {
                    method: "GET",
                    credentials: "include",
                }
            );

            response = await response.json();
            if (response.success) {
                return response.data;
            }

            throw new Error("Unable to fetch user info");
        } catch (err) {
            console.log(err.message);
            return { error: err.message };
        }
    };

    const getStudentById = async (id) => {
        try {
            let response = await fetch(
                `${import.meta.env.VITE_API_HOST_URL}api/students/getone/${id}`
            );

            response = response.json();
            return response;
        } catch (err) {}
    };

    const updateStudent = async (formFields, files) => {
        // validate using own hook
        const errors = useUpdateStudentFormValidation(formFields, files);
        if (errors.length > 0) {
            return {
                status: "error",
                title: "Error",
                description: errors.join(" "),
            };
        }

        // create a formdata
        const formData = new FormData();
        formData.append("textData", JSON.stringify(formFields));

        formData.append("files", files.img);
        formData.append("files", files.resume);

        // make a api call
        let response = await fetch(
            `${import.meta.env.VITE_API_HOST_URL}api/students/update`,
            {
                method: "POST",
                body: formData,
                credentials: "include",
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
        <StudentContext.Provider
            value={{ fetchMyInfo, getStudentById, updateStudent }}
        >
            {props.children}
        </StudentContext.Provider>
    );
};

export { StudentProvider, StudentContext };
