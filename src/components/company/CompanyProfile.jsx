import { Stack } from "@chakra-ui/react";
import React from "react";

const CompanyProfile = () => {
    return (
        <Stack>
            <Stack minH={"70vh"} border={"1px solid red"} id="profile"></Stack>
            <Stack minH={"50vh"} border={"1px solid Yellow"} id="jobs"></Stack>
        </Stack>
    );
};

export default CompanyProfile;
