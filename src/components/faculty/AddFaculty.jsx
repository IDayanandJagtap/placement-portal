import { Button, HStack, Heading, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";

const AddFaculty = () => {
    return (
        <Stack
            px={6}
            py={4}
            mb={[8, 8, 8, 4]}
            justifyContent={"center"}
            alignItems={"center"}
            minH={"90vh"}
        >
            <Heading my={6} fontSize={["22px", "24px"]}>
                Add Faculty
            </Heading>
            <Stack>
                <Stack>
                    <Text as={"label"}>Name</Text>
                    <Input type="text" placeholder="Enter name"></Input>
                </Stack>
                <Stack>
                    <Text as={"label"} mt={4}>
                        Email
                    </Text>
                    <Input type="email" placeholder="Enter email"></Input>
                </Stack>
                <Stack>
                    <Text as={"label"} mt={4}>
                        Password
                    </Text>
                    <Input type="password" placeholder="Enter password"></Input>
                </Stack>
                <Stack>
                    <Text as={"label"} mt={4}>
                        Designation
                    </Text>
                    <Input type="text" placeholder="Enter Designation"></Input>
                </Stack>

                {/* buttons */}
                <HStack mt={6} justifyContent={"flex-end"}>
                    <Button>Cancel</Button>
                    <Button colorScheme="primary">Add</Button>
                </HStack>
            </Stack>
        </Stack>
    );
};

export default AddFaculty;
