import { Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { JobCard } from "../../jobs";

const job = {
    jobId: 12,
    companyName: "Job name",
    jobDescription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam dolor, magnam officiis voluptate deserunt? Distinctio voluptates non fugiat et, voluptate tempora vitae natus, totam accusantium quod provident tempore? Enim harum nisi fuga non autem illum, eos vel officiis necessitatibus corporis sequi facere voluptatibus assumenda ea repellendus maxime. Incidunt, voluptas!",
    expectedSkills: ["JavaScript", "React", "Cloud", "Hosting"],
};

// pending -> show list of students in applied jobs component
const JobPosted = () => {
    return (
        <Stack px={[4, 6]} py={4} mb={[8, 8, 8, 4]} minH={"90vh"}>
            <Heading my={6} fontSize={["22px", "24px"]}>
                Our Jobs :
            </Heading>
            <Stack gap={6}>
                {/* map job card */}
                <JobCard job={job} />
            </Stack>
        </Stack>
    );
};

export default JobPosted;
