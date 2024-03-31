import { Grid, GridItem, HStack, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const UpdateContact = () => {
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
                mb={3}
            >
                Contact details
            </Text>

            <Stack
                flexDirection={["column", "row", "row"]}
                w={"full"}
                gap={[4, 4, 8]}
            >
                <Stack w={"full"} fontSize={["14px", "16px"]}>
                    <Text my={1} as={"label"} htmlFor={"portfolio"}>
                        Portfolio{" "}
                    </Text>
                    <Input
                        w={"full"}
                        type="email"
                        id="portfolio"
                        fontSize={["14px", "16px"]}
                        placeholder="https://your-site.com"
                        border={"2px solid #E2E8F0"}
                    ></Input>
                </Stack>
                <Stack w={"full"} fontSize={["14px", "16px"]}>
                    <Text my={1}>Contact no </Text>
                    <Input
                        w={"full"}
                        type="number"
                        fontSize={["14px", "16px"]}
                        placeholder="0000000000"
                        border={"2px solid #E2E8F0"}
                    ></Input>
                </Stack>
            </Stack>

            {/* Socials */}
            <Text
                as={"h2"}
                fontWeight={"semibold"}
                fontSize={["18px", "20px", "22px", "24px"]}
                mt={10}
            >
                Socials
            </Text>

            <Stack
                flexDirection={"row"}
                flexWrap={"wrap"}
                gap={4}
                justifyContent={"space-between"}
            >
                <Stack w={["full", "full", "45%"]}>
                    <HStack my={1}>
                        <FaGithub size={32} />
                        <Input
                            type="text"
                            placeholder="https://www.github.com/username"
                            border={"2px solid #E2E8F0"}
                            fontSize={["14px", "16px"]}
                            p={[2, 3]}
                        ></Input>
                    </HStack>
                </Stack>
                <Stack w={["full", "full", "45%"]}>
                    <HStack>
                        <FaXTwitter size={32} />
                        <Input
                            type="text"
                            placeholder="https://www.x.com/username"
                            border={"2px solid #E2E8F0"}
                            fontSize={["14px", "16px"]}
                            p={[2, 3]}
                        ></Input>
                    </HStack>
                </Stack>
                <Stack w={["full", "full", "45%"]}>
                    <HStack>
                        <FaLinkedin size={32} />
                        <Input
                            type="text"
                            placeholder="https://www.linkedin.com/username"
                            border={"2px solid #E2E8F0"}
                            fontSize={["14px", "16px"]}
                            p={[2, 3]}
                        ></Input>
                    </HStack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default UpdateContact;
