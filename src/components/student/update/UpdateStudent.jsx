import {
    Button,
    HStack,
    Heading,
    Image,
    Input,
    Select,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaPlus } from "react-icons/fa6";

import demoImg from "../../../assets/userAvatar.png";
import UpdateAchievements from "./UpdateAchievements";
import UpdateAcademics from "./UpdateAcademics";
import UpdateContact from "./UpdateContact";
import UpdateSkills from "./UpdateSkills";

const UpdateStudent = () => {
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
        <VStack p={[3, 4, 4, 4, 6]} rowGap={[1, 4, 4, 5, 6]} mb={[8, 8, 8, 0]}>
            {/* heading */}
            <Heading
                as={"h1"}
                fontSize={["24px", "26px", "26px", "30px", "32px"]}
                my={3}
            >
                Update profile
            </Heading>
            <Stack
                w={"full"}
                p={5}
                my={2}
                flexDirection={["column", "column", "row"]}
                boxShadow={"lg"}
                borderRadius={"md"}
            >
                {/* Profile Image */}
                <VStack
                    position={"relative"}
                    width={["full", "full", "20%"]}
                    h={["150px", "150px", "full"]}
                >
                    <Image
                        src={demoImg}
                        borderRadius={"full"}
                        h={"full"}
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
                        _hover={{ backgroundColor: "#CBD5E0" }}
                        transition={"all 0.3s linear"}
                    >
                        <FaPlus size={32} />
                    </HStack>
                </VStack>
                {/* Name info */}
                <VStack
                    // border={"1px solid red"}
                    width={["full", "full", "70%"]}
                    alignItems={"start"}
                    py={2}
                    pl={[0, 0, 4, 10]}
                >
                    <Stack
                        w={"full"}
                        mt={5}
                        flexDirection={["column", "column", "row"]}
                    >
                        <Stack w={"full"}>
                            <Text
                                as={"label"}
                                fontSize={["16px", "18px"]}
                                fontWeight={"500"}
                            >
                                Name :
                            </Text>
                            <Input
                                placeholder="Enter your name"
                                w={["full", "full", "90%"]}
                                fontSize={["14px", "16px"]}
                            />
                        </Stack>
                        <Stack w="full">
                            <Text
                                as={"label"}
                                fontSize={["16px", "18px"]}
                                fontWeight={"500"}
                            >
                                Upload resume :{" "}
                            </Text>
                            <Input
                                type="file"
                                w={["full", "full", "90%"]}
                                fontSize={["14px", "16px"]}
                            />
                        </Stack>
                    </Stack>

                    <Stack
                        w={"full"}
                        mt={5}
                        flexDirection={["column", "column", "row"]}
                    >
                        <Stack w={"full"}>
                            <Text
                                as={"label"}
                                fontSize={["16px", "18px"]}
                                fontWeight={"500"}
                            >
                                Degree :
                            </Text>
                            <Select
                                placeholder="Select degree"
                                w={["full", "full", "90%"]}
                                fontSize={["14px", "16px"]}
                            >
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
                                fontSize={["16px", "18px"]}
                                fontWeight={"500"}
                            >
                                Year :{" "}
                            </Text>
                            <Select
                                placeholder="Select year"
                                w={["full", "full", "90%"]}
                                fontSize={["14px", "16px"]}
                            >
                                <option value="1">1st year</option>
                                <option value="2">2nd year</option>
                                <option value="3">3rd year</option>
                            </Select>
                        </Stack>
                    </Stack>
                </VStack>
            </Stack>

            <UpdateSkills />
            <UpdateAchievements />
            <UpdateAcademics />
            <UpdateContact />

            {/* Next button container */}
            <HStack w={"full"} justifyContent={"flex-end"} px={4} pb={3}>
                <Button>Clear</Button>
                <Button
                    colorScheme="primary"
                    size={["sm", "sm", "md"]}
                    onClick={handleOnNextUpdate}
                >
                    Update
                </Button>
            </HStack>
        </VStack>
    );
};

export default UpdateStudent;
