import {
    Box,
    Button,
    HStack,
    Image,
    Input,
    Select,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaPlus } from "react-icons/fa6";

import demoImg from "../../assets/react.svg";

const UpdateStudent = () => {
    return (
        <VStack
            backgroundColor={"#f1f1f1"}
            minH={"90vh"}
            p={5}
            fontFamily={"system-ui"}
        >
            {/* heading */}
            <Text as={"h1"} fontSize={"32px"} my={8} fontWeight={"semibold"}>
                Update profile
            </Text>
            <HStack
                w={"80%"}
                backgroundColor={"white"}
                px={5}
                py={8}
                my={2}
                boxShadow={"lg"}
                borderRadius={"md"}
            >
                {/* Profile Image */}
                <VStack position={"relative"} width={"20%"}>
                    <Image
                        src={demoImg}
                        width={200}
                        height={200}
                        borderRadius={"full"}
                        boxShadow={"2px 2px 5px #b4b4b4"}
                        opacity={0.4}
                    ></Image>
                    <HStack
                        position={"absolute"}
                        top={"50%"}
                        left={"50%"}
                        transform={"translate(-50%, -50%)"}
                        p={3}
                        cursor={"pointer"}
                        borderRadius={"full"}
                        backgroundColor={"gray.200"}
                        _hover={{ backgroundColor: "#CBD5E0" }}
                    >
                        <FaPlus size={32} />
                    </HStack>
                </VStack>
                {/* Name info */}
                <VStack
                    // border={"1px solid red"}
                    width={"full"}
                    alignItems={"start"}
                    py={2}
                    pl={10}
                >
                    <Stack w={"full"}>
                        <Text
                            as={"label"}
                            fontSize={"18px"}
                            fontWeight={"semibold"}
                        >
                            Name :
                        </Text>
                        <Input placeholder="Enter your name..." w={"45%"} />
                    </Stack>

                    <HStack w={"full"} mt={5}>
                        <Stack w={"full"}>
                            <Text
                                as={"label"}
                                fontSize={"18px"}
                                fontWeight={"semibold"}
                            >
                                Degree :
                            </Text>
                            <Select placeholder="Select degree" w={"90%"}>
                                <option value="bcs">
                                    Bsc Computer Science
                                </option>
                                <option value="bca">
                                    Bsc Computer Application
                                </option>
                            </Select>
                        </Stack>
                        <Stack w="full">
                            <Text
                                as={"label"}
                                fontSize={"18px"}
                                fontWeight={"semibold"}
                            >
                                Year :{" "}
                            </Text>
                            <Select placeholder="Select year" w={"90%"}>
                                <option value="1">1st year</option>
                                <option value="2">2nd year</option>
                                <option value="3">3rd year</option>
                            </Select>
                        </Stack>
                    </HStack>
                </VStack>
            </HStack>

            {/*  select section */}
            <HStack
                w={"80%"}
                backgroundColor={"white"}
                px={5}
                py={8}
                my={2}
                boxShadow={"lg"}
                borderRadius={"md"}
                alignItems={"stretch"}
            >
                <VStack w={"20%"} alignItems={"stretch"}>
                    <Button h={"3rem"} fontSize={"20px"}>
                        Skills
                    </Button>
                    <Button h={"3rem"} fontSize={"20px"}>
                        Achievements
                    </Button>
                    <Button h={"3rem"} fontSize={"20px"}>
                        Academics
                    </Button>
                    <Button h={"3rem"} fontSize={"20px"}>
                        Contact
                    </Button>
                </VStack>
                {/* changable box */}
                <Stack
                    w={"full"}
                    border={"1px solid black"}
                    ml={10}
                    borderRadius={"sm"}
                ></Stack>
            </HStack>
        </VStack>
    );
};

export default UpdateStudent;
