import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import JobCard from "./JobCard";

const cardColors = [
    { dark: "#EF4444", light: "#FEF2F2" },
    { dark: "#EAB308", light: "#FEFCE8" },
    { dark: "#22C55E", light: "#F0FDF4" },
];
const length = cardColors.length;

const JobList = ({ demoJobs }) => {
    return (
        <Stack p={[3, 4, 4, 4, 6]} rowGap={[4, 5, 5, 5, 6]}>
            <Heading as={"h2"} fontSize={["24px", "28px"]}>
                Jobs
            </Heading>

            {demoJobs.map((e, i) => {
                return (
                    <JobCard
                        key={i}
                        job={e}
                        lightColor={cardColors[i % length].light}
                        darkColor={cardColors[i % length].dark}
                    />
                );
            })}
        </Stack>
    );
};

export default JobList;
