import { Stack, Text, Textarea } from "@chakra-ui/react";
import React from "react";

const UpdateAchievements = () => {
    return (
        <Stack h={"full"} p={4}>
            <Text as={"h2"} fontWeight={"semibold"} fontSize={"24px"} mb={1}>
                Achievements
            </Text>
            <Textarea
                h={"full"}
                border={"2px solid #E2E8F0"}
                placeholder="Enter you achievements here..."
            ></Textarea>
        </Stack>
    );
};

export default UpdateAchievements;
