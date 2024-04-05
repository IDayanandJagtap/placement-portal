import { Heading, Stack } from "@chakra-ui/react";
import React from "react";
import Profile from "./description/Profile";
import Jobs from "./description/Jobs";

const CompanyProfile = () => {
    return (
        <Stack p={[2, 2, 4, 6]} gap={12}>
            <Profile />
            <Jobs />
        </Stack>
    );
};

export default CompanyProfile;
