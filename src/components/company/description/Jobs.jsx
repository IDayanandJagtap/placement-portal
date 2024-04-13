import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { JobCard } from "../../jobs";

const Jobs = ({ jobs }) => {
    return (
        <Stack minH={"fit-content"} p={6} id="jobs" gap={4}>
            <Heading as={"h3"} fontSize={"26px"} my={3} fontWeight={"600"}>
                Job opportunities :
            </Heading>

            {jobs.length == 0 && (
                <Text textAlign={"center"}>No jobs posted yet!</Text>
            )}

            {jobs instanceof Array && jobs.map((e) => <JobCard job={e} />)}
        </Stack>
    );
};

export default Jobs;
