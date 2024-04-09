import { createContext, useState } from "react";
import { usePostJobFormValidtion } from "../hooks/formValidation";
const CompanyContext = createContext();

const CompanyProvider = (props) => {
    const getMyInfo = async () => {
        try {
            let response = await fetch(
                `${import.meta.env.VITE_API_HOST_URL}api/company/getme`,
                {
                    method: "GET",
                    credentials: "include",
                }
            );

            response = await response.json();
            if (response.success) {
                //set local storage
                const data = JSON.parse(localStorage.getItem("user"));
                data.userName = response.data.name;
                localStorage.setItem("user", JSON.stringify(data));
                //  return
                return response.data;
            }

            throw new Error("Unable to fetch user info");
        } catch (err) {
            console.log(err.message);
            return { error: err.message };
        }
    };

    const getCompanyById = async (id) => {
        try {
            let response = await fetch(
                `${import.meta.env.VITE_API_HOST_URL}api/company/getone/${id}`
            );

            response = response.json();
            return response;
        } catch (err) {}
    };

    const getMyJobs = async () => {
        try {
            let response = await fetch(
                `${import.meta.env.VITE_API_HOST_URL}api/company/jobs`,
                {
                    method: "GET",
                    credentials: "include",
                }
            );

            response = await response.json();
            if (response.success) {
                return response.data;
            }

            throw new Error("Unable to fetch jobs");
        } catch (err) {
            console.log(err.message);
            return { error: err.message };
        }
    };

    const updateCompany = async (formFields, img) => {
        // create a formdata
        const formData = new FormData();
        formData.append("textData", JSON.stringify(formFields));
        formData.append("files", img);

        // make a api call
        let response = await fetch(
            `${import.meta.env.VITE_API_HOST_URL}api/company/update`,
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

    const postJob = async (formFields) => {
        const errors = usePostJobFormValidtion(formFields);
        if (errors.length > 0) {
            return {
                status: "error",
                title: "Error",
                description: errors.join(" "),
            };
        }

        try {
            let response = await fetch(
                `${import.meta.env.VITE_API_HOST_URL}api/company/newjob`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formFields),
                    credentials: "include",
                }
            );

            response = await response.json();
            console.log(response);

            if (response.success) {
                return {
                    status: "success",
                    title: "Job posted successfully",
                    description: "",
                };
            }

            // failed
            return {
                status: "error",
                title: "Unable to post job",
                description: "",
            };
        } catch (err) {
            console.log(err);
            return {
                status: "status",
                title: "Something went wrong",
                description: "",
            };
        }
    };

    return (
        <CompanyContext.Provider
            value={{
                getMyInfo,
                getMyJobs,
                getCompanyById,
                updateCompany,
                postJob,
            }}
        >
            {props.children}
        </CompanyContext.Provider>
    );
};

export { CompanyContext, CompanyProvider };
