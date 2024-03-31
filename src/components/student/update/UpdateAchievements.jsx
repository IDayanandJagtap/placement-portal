import { Stack, Text, Textarea } from "@chakra-ui/react";
import React from "react";

const UpdateAchievements = () => {
    return (
        <Stack
            w={"full"}
            py={[4]}
            px={[4, 6]}
            my={2}
            boxShadow={"md"}
            borderRadius={"lg"}
        >
            <Text
                as={"h2"}
                fontWeight={"semibold"}
                fontSize={["18px", "20px", "22px", "24px"]}
                mb={1}
            >
                Achievements
            </Text>
            <Textarea
                h={"full"}
                rows={"10"}
                border={"2px solid #E2E8F0"}
                fontSize={["14px", "16px", "18px"]}
                placeholder="Enter you achievements here..."
            ></Textarea>
        </Stack>
    );
};

export default UpdateAchievements;
