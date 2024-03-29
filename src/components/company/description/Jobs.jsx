import { Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { JobCard } from "../../jobs";

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
];

const Jobs = () => {
    return (
        <Stack minH={"50vh"} p={6} id="jobs" gap={4}>
            <Heading as={"h3"} fontSize={"26px"} my={3} fontWeight={"600"}>
                Job opportunities :
            </Heading>

            {demoJobs.map((e) => (
                <JobCard job={e} />
            ))}
        </Stack>
    );
};

export default Jobs;
