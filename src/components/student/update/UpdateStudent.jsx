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
    useToast,
} from "@chakra-ui/react";
import React, { useContext, useRef, useState } from "react";
import demoImg from "../../../assets/userAvatar.png";
import { FaPlus } from "react-icons/fa6";

import {
    UpdateAchievements,
    UpdateAcademics,
    UpdateContact,
    UpdateSkills,
} from ".";
import { StudentContext } from "../../../contextApi/StudentContext";
import { useNavigate } from "react-router-dom";

const emptyStudentDetails = {
    name: "",
    degree: "",
    year: "",
    skills: [],
    academics: Array(6).fill(0),
    achievements: "",
    portfolio: "",
    phone: "0000000000",
    contact: { github: "", linkedin: "", twitter: "" },
};

const UpdateStudent = ({ studentInfo, setCurrentSection }) => {
    const [files, setFiles] = useState({ img: "", resume: "" });
    const [formFields, setFormFields] = useState(studentInfo);
    const profileImageRef = useRef();
    const { updateStudent } = useContext(StudentContext);
    const toast = useToast();
    const navigate = useNavigate();

    const handleFileButtonClick = () => {
        profileImageRef.current.click();
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFiles({ ...files, [e.target.name]: file });
        console.log(e.target.name);
        console.log(files);
    };
    const handleOnInputChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setFormFields({ ...formFields, [field]: value });
        console.log(formFields);
    };

    const handleOnUpdateClick = async () => {
        const result = await updateStudent(formFields, files);
        // navigate again so the user info will be updated (fetch) and set current section to profile
        navigate("/me");
        setCurrentSection("profile");
        toast({
            title: result.title,
            description: result.description,
            status: result.status,
            duration: 3000,
            isClosable: true,
        });
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
                    <Input
                        type="file"
                        display={"none"}
                        name="img"
                        accept=".jpeg .jpg .png"
                        ref={profileImageRef}
                        onChange={handleFileChange}
                    ></Input>
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
                        <FaPlus size={32} onClick={handleFileButtonClick} />
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
                                value={formFields.name}
                                name="name"
                                onChange={handleOnInputChange}
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
                                name="resume"
                                accept=".pdf .docx"
                                w={["full", "full", "90%"]}
                                fontSize={["14px", "16px"]}
                                onChange={handleFileChange}
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
                                name="degree"
                                onChange={handleOnInputChange}
                            >
                                <option value="Bsc Computer Science">
                                    Bsc Computer Science
                                </option>
                                <option value="Bsc Computer Application">
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
                                name="year"
                                onChange={handleOnInputChange}
                            >
                                <option value="1st year">1st year</option>
                                <option value="2nd year">2nd year</option>
                                <option value="3rd year">3rd year</option>
                            </Select>
                        </Stack>
                    </Stack>
                </VStack>
            </Stack>

            <UpdateSkills
                formFields={formFields}
                setFormFields={setFormFields}
            />
            <UpdateAchievements
                formFields={formFields}
                setFormFields={setFormFields}
            />
            <UpdateAcademics
                formFields={formFields}
                setFormFields={setFormFields}
            />
            <UpdateContact
                formFields={formFields}
                setFormFields={setFormFields}
            />

            {/* Next button container */}
            <HStack w={"full"} justifyContent={"flex-end"} px={4} pb={3}>
                <Button>Clear</Button>
                <Button
                    colorScheme="primary"
                    size={["sm", "sm", "md"]}
                    onClick={handleOnUpdateClick}
                >
                    Update
                </Button>
            </HStack>
        </VStack>
    );
};

export default UpdateStudent;
