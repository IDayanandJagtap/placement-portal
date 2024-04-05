import {
    Button,
    HStack,
    Heading,
    Stack,
    Text,
    Textarea,
} from "@chakra-ui/react";
import React from "react";

const Notifications = () => {
    return (
        <Stack px={6} py={4} mb={[8, 8, 8, 4]} minH={"90vh"}>
            <Heading my={6} fontSize={["22px", "24px"]}>
                Add notifications
            </Heading>
            <Stack>
                <Textarea
                    placeholder="Enter new notification"
                    rows={5}
                ></Textarea>

                {/* buttons */}
                <HStack mt={6} justifyContent={"flex-end"}>
                    <Button>Cancel</Button>
                    <Button colorScheme="primary">Update</Button>
                </HStack>
            </Stack>

            {/* Previous notifications */}

            <Stack>
                <Heading my={6} fontSize={["22px", "24px"]}>
                    Previous Notifications
                </Heading>

                {/* map a box here for previous notifications */}
                <Stack
                    w={"full"}
                    borderRadius={"md"}
                    background={"primary.50"}
                    boxShadow={"md"}
                    p={4}
                >
                    <Text>hello what is this </Text>
                    <Text color={"gray.500"}>Date</Text>
                    <HStack justifyContent={"end"} w={"full"}>
                        <Button colorScheme="red">Delete</Button>
                    </HStack>
                </Stack>
                <Stack
                    w={"full"}
                    borderRadius={"md"}
                    background={"primary.50"}
                    boxShadow={"md"}
                    p={4}
                >
                    <Text>hello what is this </Text>
                    <Text color={"gray.500"} textAlign={"right"}>
                        Date
                    </Text>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Notifications;
