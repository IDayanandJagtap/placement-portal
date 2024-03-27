import { Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { JobCard } from "./";

const JobList = ({ demoJobs }) => {
    return (
        <Stack p={[3, 4, 4, 4, 6]} rowGap={[4, 5, 5, 5, 6]}>
            <Heading as={"h2"} fontSize={["24px", "28px"]}>
                Jobs
            </Heading>

            {demoJobs.map((e, i) => {
                return <JobCard key={i} job={e} />;
            })}
        </Stack>
    );
};

export default JobList;
