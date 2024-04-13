import { Stack, useToast } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { ApplyToJob, ShowAppliedStudents } from ".";
import { Notifications } from "../utils";
import { UserContext } from "../../contextApi/UserContext";
import { useParams } from "react-router-dom";

const JobProfileContainer = () => {
    const [job, setJob] = useState({
        title: "",
        type: "",
        postedDate: "",
        description: "",
        skills: [],
        salaryRange: { min: "", max: "" },
    });
    const { id } = useParams();
    const { user, getJobById } = useContext(UserContext);
    const toast = useToast();

    const getJobDetails = async (id) => {
        let result = await getJobById(id);
        if (result.status === "error") {
            return toast({ title: result.error, status: "error" });
        }

        setJob(result.job);
    };

    useEffect(() => {
        getJobDetails(id);
    }, []);

    return (
        <Stack flexDirection={"row"} h={"full"} overflow={"auto"} gap={0}>
            {/* Main component */}
            <Stack
                w={["100%", "100%", "100%", "75%"]}
                overflow={"scroll"}
                px={[0, 2, 2, 3, 4]}
            >
                <ApplyToJob jobDetails={job} />
                {(user.userType === "company" ||
                    user.userType === "faculty") && <ShowAppliedStudents />}
            </Stack>

            {/* Sidebar  -> show only in big screens*/}
            <Stack
                display={["none", "none", "none", "flex"]}
                w={"25%"}
                overflow={"scroll"}
                p={[2, 2, 2, 2, 4]}
                background={"#EEF2FF"}
            >
                <Notifications />
            </Stack>
        </Stack>
    );
};

export default JobProfileContainer;

const demoJobs = [
    {
        jobId: 1,
        companyName: "Job Name",
        jobDescription:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam dolor, magnam officiis voluptate deserunt? Distinctio voluptates non fugiat et, voluptate tempora vitae natus, totam accusantium quod provident tempore? Enim harum nisi fuga non autem illum, eos vel officiis necessitatibus corporis sequi facere voluptatibus assumenda ea repellendus maxime. Incidunt, voluptas!",
        expectedSkills: [
            "JavaScript",
            "React",
            "Cloud",
            "Hosting",
            "Html",
            "css",
            "tailwind",
            "css",
        ],
    },
    {
        jobId: 12,
        companyName: "Job name",
        jobDescription:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam dolor, magnam officiis voluptate deserunt? Distinctio voluptates non fugiat et, voluptate tempora vitae natus, totam accusantium quod provident tempore? Enim harum nisi fuga non autem illum, eos vel officiis necessitatibus corporis sequi facere voluptatibus assumenda ea repellendus maxime. Incidunt, voluptas!",
        expectedSkills: ["JavaScript", "React", "Cloud", "Hosting"],
    },
    {
        jobId: 123,
        companyName: "Job",
        jobDescription:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam dolor, magnam officiis voluptate deserunt? Distinctio voluptates non fugiat et, voluptate tempora vitae natus, totam accusantium quod provident tempore? Enim harum nisi fuga non autem illum, eos vel officiis necessitatibus corporis sequi facere voluptatibus assumenda ea repellendus maxime. Incidunt, voluptas!",
        expectedSkills: ["JavaScript", "React", "Cloud", "Hosting"],
    },
    {
        jobId: 1234,
        companyName: "Job",
        jobDescription:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam dolor, magnam officiis voluptate deserunt? Distinctio voluptates non fugiat et, voluptate tempora vitae natus, totam accusantium quod provident tempore? Enim harum nisi fuga non autem illum, eos vel officiis necessitatibus corporis sequi facere voluptatibus assumenda ea repellendus maxime. Incidunt, voluptas!",
        expectedSkills: ["JavaScript", "React", "Cloud", "Hosting"],
    },
    {
        jobId: 12345,
        companyName: "Job",
        jobDescription:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam dolor, magnam officiis voluptate deserunt? Distinctio voluptates non fugiat et, voluptate tempora vitae natus, totam accusantium quod provident tempore? Enim harum nisi fuga non autem illum, eos vel officiis necessitatibus corporis sequi facere voluptatibus assumenda ea repellendus maxime. Incidunt, voluptas!",
        expectedSkills: ["JavaScript", "React", "Cloud", "Hosting"],
    },
];
