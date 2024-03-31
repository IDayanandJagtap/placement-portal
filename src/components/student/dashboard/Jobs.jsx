import { Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { JobCard } from "../../jobs";

// Jobs student applied for :
const Jobs = () => {
    return (
        <VStack
            p={[3, 4, 4, 4, 6]}
            rowGap={[1, 4, 4, 5, 6]}
            mb={[12, 12, 12, 0]}
            w={"full"}
            minH={["fit-content", "fit-content", "fit-content", "95vh"]}
        >
            <Heading
                as={"h1"}
                fontSize={["24px", "26px", "26px", "30px", "32px"]}
                my={3}
                textAlign={"left"}
                w={"full"}
            >
                Jobs you applied
            </Heading>

            {demoJobs.map((e) => {
                return <JobCard job={e} />;
            })}
        </VStack>
    );
};

//
export default Jobs;

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
