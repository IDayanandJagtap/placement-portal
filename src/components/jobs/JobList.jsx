import { Heading, Stack, Text, useToast } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { JobCard } from "./";
import { UserContext } from "../../contextApi/UserContext";

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const { getAllJobs } = useContext(UserContext);
    const toast = useToast();
    const fetchJobs = async () => {
        const result = await getAllJobs();
        if (result.status == "error") {
            return toast({ title: result.error, status: "error" });
        }
        setJobs(result);
    };
    useEffect(() => {
        fetchJobs();
    }, []);
    return (
        <Stack p={[3, 4, 4, 4, 6]} rowGap={[4, 5, 5, 5, 6]}>
            <Heading as={"h2"} fontSize={["24px", "28px"]}>
                Jobs
            </Heading>

            {jobs.length === 0 ? (
                <Stack alignItems={"center"} h={"full"}>
                    {" "}
                    <Text>No jobs!</Text>
                </Stack>
            ) : (
                <>
                    {jobs.map((job, i) => {
                        return <JobCard key={i} job={job} />;
                    })}
                </>
            )}
        </Stack>
    );
};

export default JobList;
