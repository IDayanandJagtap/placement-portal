import { Grid, GridItem, HStack, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const UpdateContact = () => {
    return (
        <Stack h={"full"} p={4}>
            <Text as={"h2"} fontWeight={"semibold"} fontSize={"24px"} mb={3}>
                Contact details
            </Text>

            <Grid templateColumns={"repeat(2, 1fr)"} columnGap={8}>
                <GridItem>
                    <Text my={1}>Email </Text>
                    <Input type="email" placeholder="student@gmail.com"></Input>
                </GridItem>
                <GridItem>
                    <Text my={1}>Contact no </Text>
                    <Input type="number" placeholder="0000000000"></Input>
                </GridItem>
            </Grid>

            <Text as={"h2"} fontWeight={"semibold"} fontSize={"24px"} mt={10}>
                Socials
            </Text>

            <Grid templateColumns={"repeat(2, 1fr)"} columnGap={8} rowGap={4}>
                <GridItem>
                    <HStack my={1}>
                        <FaGithub size={32} />
                        <Input
                            type="text"
                            placeholder="https://www.github.com/username"
                        ></Input>
                    </HStack>
                </GridItem>
                <GridItem>
                    <HStack>
                        <FaXTwitter size={32} />
                        <Input
                            type="text"
                            placeholder="https://www.x.com/username"
                        ></Input>
                    </HStack>
                </GridItem>
                <GridItem>
                    <HStack>
                        <FaLinkedin size={32} />
                        <Input
                            type="text"
                            placeholder="https://www.linkedin.com/username"
                        ></Input>
                    </HStack>
                </GridItem>
            </Grid>
        </Stack>
    );
};

export default UpdateContact;
