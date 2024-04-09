import { Heading, Stack, Text, useToast } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { JobCard } from "../../jobs";
import { CompanyContext } from "../../../contextApi/CompanyContext";

const job = {
    jobId: 12,
    companyName: "Job name",
    jobDescription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam dolor, magnam officiis voluptate deserunt? Distinctio voluptates non fugiat et, voluptate tempora vitae natus, totam accusantium quod provident tempore? Enim harum nisi fuga non autem illum, eos vel officiis necessitatibus corporis sequi facere voluptatibus assumenda ea repellendus maxime. Incidunt, voluptas!",
    expectedSkills: ["JavaScript", "React", "Cloud", "Hosting"],
};

// pending -> show list of students in applied jobs component
const JobPosted = () => {
    const [jobs, setJobs] = useState([]);
    const { getMyJobs } = useContext(CompanyContext);
    const toast = useToast();

    useEffect(() => {
        const getJobs = async () => {
            const result = await getMyJobs();
            if (result.error) {
                return toast({
                    title: result.error,
                    status: "error",
                    duration: 3000,
                });
            }
            setJobs(result);
        };
        getJobs();
    }, []);

    return (
        <Stack px={[4, 6]} py={4} mb={[8, 8, 8, 4]} minH={"90vh"}>
            <Heading my={6} fontSize={["22px", "24px"]}>
                Our Jobs :
            </Heading>
            <Stack gap={6}>
                {/* map job card */}
                {jobs.map((job, i) => {
                    return <JobCard key={i} job={job} />;
                })}
            </Stack>
            {jobs.length == 0 && (
                <Stack
                    justifyContent={"center"}
                    alignItems={"center"}
                    h={"full"}
                >
                    <Text>You haven't posted a job yet</Text>
                </Stack>
            )}
        </Stack>
    );
};

export default JobPosted;
