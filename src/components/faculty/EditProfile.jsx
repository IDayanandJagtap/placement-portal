import { Button, HStack, Heading, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";

const EditProfile = () => {
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
                Update profile
            </Heading>
            <Stack>
                <Text as={"lable"}>Name</Text>
                <Input type="text" placeholder="Enter name"></Input>
                <Text as={"lable"} mt={4}>
                    Email
                </Text>
                <Input type="email" placeholder="Enter email"></Input>
                <Text as={"lable"} mt={4}>
                    Designation
                </Text>
                <Input type="text" placeholder="Enter Designation"></Input>

                {/* buttons */}
                <HStack mt={6} justifyContent={"flex-end"}>
                    <Button>Cancel</Button>
                    <Button colorScheme="primary">Update</Button>
                </HStack>
            </Stack>
        </Stack>
    );
};

export default EditProfile;
