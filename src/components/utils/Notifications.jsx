import { Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Notifications = () => {
    return (
        <Stack borderRadius={"md"} p={4} h={"40vh"} background={"#fff"}>
            <Text as={"h2"} fontSize={"22px"} color={"blackAlpha.700"}>
                Notifications
            </Text>
            <VStack
                h={"full"}
                justifyContent={"center"}
                border={"2px solid #A0AEC0"}
                borderRadius={"sm"}
            >
                <Text color={"gray.500"}>No new notifications</Text>
            </VStack>
        </Stack>
    );
};

export default Notifications;
