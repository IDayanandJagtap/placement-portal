import { Heading, Stack, Text, Input, HStack, Button } from "@chakra-ui/react";
import React from "react";

const Settings = () => {
    return (
        <Stack
            px={6}
            py={4}
            mb={[8, 8, 8, 4]}
            justifyContent={"center"}
            alignItems={"center"}
            minH={"90vh"}
        >
            {/* <Button>Delete Account</Button> */}
            <Text>Delete account option</Text>
            <Text>Feedbacks</Text>
        </Stack>
    );
};

export default Settings;
