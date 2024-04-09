import { createContext, useState } from "react";
import { useUpdateStudentFormValidation } from "../hooks/formValidation";

const StudentContext = createContext();

const StudentProvider = (props) => {
    const [myInfo, setMyInfo] = useState(null);

    const fetchMyInfo = async () => {
        try {
            let response = await fetch(
                `${import.meta.env.VITE_API_HOST_URL}api/students/getme`
            );

            response = response.json();
            if (response.success) {
                setMyInfo(response.data);
                return { ...myInfo };
            }

            throw new Error("Unable to fetch user info");
        } catch (err) {
            console.log(err.message);
        }
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
            `${import.meta.env.VITE_API_HOST_URL}api/students/update`,
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
        <StudentContext.Provider value={{ myInfo, fetchMyInfo, updateStudent }}>
            {props.children}
        </StudentContext.Provider>
    );
};

export { StudentProvider, StudentContext };
