import {
    Button,
    HStack,
    Image,
    Input,
    Select,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

import demoImg from "../../assets/userAvatar.png";
import UpdateAchievements from "./update/UpdateAchievements";
import UpdateAcademics from "./update/UpdateAcademics";
import UpdateContact from "./update/UpdateContact";
import UpdateSkills from "./update/UpdateSkills";

const UpdateStudent = () => {
    const [activeSection, setActiveSection] = useState(0);

    const handleOnNextUpdate = () => {
        if (activeSection == 3) {
            // update
            // api call
            // let submit = confirm(
            //     "Are you sure, you want to update your information ?"
            // );
            // if (submit) {
            //     console.log("UPDAATIIIIIIIIIIIIIIIIIIIING");
            // } else {
            //     console.log("JALDI KAR ");
            // }
        } else {
            setActiveSection(activeSection + 1);
        }
    };

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
                        // backgroundColor={"gray.300"}
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
                <VStack w={"22%"} alignItems={"stretch"}>
                    <Button
                        h={"3rem"}
                        fontSize={"18px"}
                        backgroundColor={activeSection == 0 ? "blue.700" : ""}
                        color={activeSection == 0 ? "white" : ""}
                        border={activeSection == 0 ? "1px solid #2C5282" : ""}
                        _hover={
                            activeSection == 0
                                ? { background: "white", color: "#2C5282" }
                                : ""
                        }
                        onClick={() => {
                            setActiveSection(0);
                        }}
                    >
                        Skills
                    </Button>
                    <Button
                        h={"3rem"}
                        fontSize={"18px"}
                        backgroundColor={activeSection == 1 ? "blue.700" : ""}
                        color={activeSection == 1 ? "white" : ""}
                        border={activeSection == 1 ? "1px solid #2C5282" : ""}
                        _hover={
                            activeSection == 1
                                ? { background: "white", color: "#2C5282" }
                                : ""
                        }
                        onClick={() => {
                            setActiveSection(1);
                        }}
                    >
                        Achievements
                    </Button>
                    <Button
                        h={"3rem"}
                        fontSize={"18px"}
                        backgroundColor={activeSection == 2 ? "blue.700" : ""}
                        color={activeSection == 2 ? "white" : ""}
                        border={activeSection == 2 ? "1px solid #2C5282" : ""}
                        _hover={
                            activeSection == 2
                                ? { background: "white", color: "#2C5282" }
                                : ""
                        }
                        onClick={() => {
                            setActiveSection(2);
                        }}
                    >
                        Academics
                    </Button>
                    <Button
                        h={"3rem"}
                        fontSize={"18px"}
                        backgroundColor={activeSection == 3 ? "blue.700" : ""}
                        color={activeSection == 3 ? "white" : ""}
                        border={activeSection == 3 ? "1px solid #2C5282" : ""}
                        _hover={
                            activeSection == 3
                                ? { background: "white", color: "#2C5282" }
                                : ""
                        }
                        onClick={() => {
                            setActiveSection(3);
                        }}
                    >
                        Contact
                    </Button>
                </VStack>
                {/* changeable box */}
                <Stack
                    w={"full"}
                    border={"2px solid #CBD5E0"}
                    // boxShadow={"md"}
                    ml={6}
                    borderRadius={"md"}
                    minH={"55vh"}
                >
                    {activeSection == 0 && <UpdateSkills />}
                    {activeSection == 1 && <UpdateAchievements />}
                    {activeSection == 2 && <UpdateAcademics />}
                    {activeSection == 3 && <UpdateContact />}

                    {/* Next button container */}
                    <HStack
                        w={"full"}
                        justifyContent={"flex-end"}
                        px={4}
                        pb={3}
                    >
                        <Button
                            backgroundColor={"blue.700"}
                            color={"white"}
                            variant={"solid"}
                            border={"1px solid #2C5282"}
                            _hover={{ background: "white", color: "#2C5282" }}
                            onClick={handleOnNextUpdate}
                        >
                            {activeSection == 3 ? "Update" : "Next"}
                        </Button>
                    </HStack>
                </Stack>
            </HStack>
        </VStack>
    );
};

export default UpdateStudent;
