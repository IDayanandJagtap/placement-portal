import { Stack } from "@chakra-ui/react";
import React from "react";
import ApplyToJob from "./ApplyToJob";
import Notifications from "../utils/Notifications";

const JobDescriptionOutlet = () => {
    return (
        <Stack flexDirection={"row"} h={"full"} overflow={"auto"} gap={0}>
            {/* Main component */}
            <Stack
                w={["100%", "100%", "100%", "75%"]}
                overflow={"scroll"}
                px={[0, 2, 2, 3, 4]}
            >
                <ApplyToJob demoJobs={demoJobs} />
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

export default JobDescriptionOutlet;

const demoJobs = [
    {
        jobId: 1,
        companyName: "Company Name",
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
        companyName: "Company name",
        jobDescription:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam dolor, magnam officiis voluptate deserunt? Distinctio voluptates non fugiat et, voluptate tempora vitae natus, totam accusantium quod provident tempore? Enim harum nisi fuga non autem illum, eos vel officiis necessitatibus corporis sequi facere voluptatibus assumenda ea repellendus maxime. Incidunt, voluptas!",
        expectedSkills: ["JavaScript", "React", "Cloud", "Hosting"],
    },
    {
        jobId: 123,
        companyName: "Company",
        jobDescription:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam dolor, magnam officiis voluptate deserunt? Distinctio voluptates non fugiat et, voluptate tempora vitae natus, totam accusantium quod provident tempore? Enim harum nisi fuga non autem illum, eos vel officiis necessitatibus corporis sequi facere voluptatibus assumenda ea repellendus maxime. Incidunt, voluptas!",
        expectedSkills: ["JavaScript", "React", "Cloud", "Hosting"],
    },
    {
        jobId: 1234,
        companyName: "Company",
        jobDescription:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam dolor, magnam officiis voluptate deserunt? Distinctio voluptates non fugiat et, voluptate tempora vitae natus, totam accusantium quod provident tempore? Enim harum nisi fuga non autem illum, eos vel officiis necessitatibus corporis sequi facere voluptatibus assumenda ea repellendus maxime. Incidunt, voluptas!",
        expectedSkills: ["JavaScript", "React", "Cloud", "Hosting"],
    },
    {
        jobId: 12345,
        companyName: "Company",
        jobDescription:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam dolor, magnam officiis voluptate deserunt? Distinctio voluptates non fugiat et, voluptate tempora vitae natus, totam accusantium quod provident tempore? Enim harum nisi fuga non autem illum, eos vel officiis necessitatibus corporis sequi facere voluptatibus assumenda ea repellendus maxime. Incidunt, voluptas!",
        expectedSkills: ["JavaScript", "React", "Cloud", "Hosting"],
    },
];
