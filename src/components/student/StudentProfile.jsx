import {
    Button,
    HStack,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaLink, FaXTwitter } from "react-icons/fa6";
import { IoArrowBack, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import demoImg from "../../assets/react.svg";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Academics from "./Academics";
import "../../global.css";

const StudentProfile = () => {
    const [student, setStudent] = useState({
        name: "",
        year: "",
        degree: "",
        skills: [],
    });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        let stud = studentData.filter((e) => {
            return e.id == id;
        })[0];

        setStudent(stud);
    }, []);

    return (
        <>
            {/* Background image can be added (like college logo or something representing college ) */}
            {/* <img
                src={logo}
                style={{
                    position: "fixed",
                    zIndex: "-1",
                    top: "25%",
                    left: "25%",
                    height: "50vh",
                    width: "auto",
                }}
            ></img> */}
            <VStack
                p={[3, 4, 4, 4, 6]}
                rowGap={[1, 4, 4, 5, 6]}
                // borderRadius={"md"}
            >
                <Button
                    alignSelf={"start"}
                    color={"white"}
                    padding={"2"}
                    // background={"primary.900"}
                    colorScheme="primary"
                    borderRadius={"full"}
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    <IoArrowBack size={24} />
                </Button>

                <Stack
                    w={"full"}
                    p={5}
                    my={2}
                    flexDirection={["column-reverse", "column-reverse", "row"]}
                    backgroundColor={"secondary.50"}
                    boxShadow={"md"}
                    borderRadius={"md"}
                    id="profile"
                >
                    {/* Main info */}
                    <VStack
                        width={"full"}
                        alignItems={["center", "center", "start"]}
                        justifyContent={"start"}
                        pl={1}
                    >
                        <Heading
                            as={"h1"}
                            fontSize={["24px", "26px", "26px", "30px", "32px"]}
                        >
                            {student.name}
                            {/* isVerified */}
                            {/* <IoCheckmarkSharp /> */}
                        </Heading>
                        <Text
                            as={"h3"}
                            color={"gray.500"}
                            mt={[-1, -2]}
                            pl={1}
                            fontSize={["14px", "16px", "16px", "18px"]}
                        >
                            {student.degree}{" "}
                            <Text as={"span"}>, {student.year} year</Text>
                        </Text>

                        {/* Portfolio link */}
                        <HStack color={"blue.700"} mt={1} mb={2}>
                            <FaLink size={"20"} />
                            <Text as={"a"} fontSize={["16px", "18px", "20px"]}>
                                <a
                                    target="_blank"
                                    href="https://dayanandjagtap.vercel.app"
                                >
                                    Portfolio
                                </a>
                            </Text>
                        </HStack>

                        {/* Socials */}
                        <HStack mt={4} gap={4}>
                            <a target="_blank" href="#">
                                <IoLogoGithub size={24} className="hoverIcon" />
                            </a>
                            <a target="_blank" href="#">
                                <FaXTwitter size={24} className="hoverIcon" />
                            </a>
                            <a target="_blank" href="#">
                                <IoLogoLinkedin
                                    size={24}
                                    className="hoverIcon"
                                />
                            </a>
                        </HStack>

                        {/* Buttons */}
                        <HStack mt={12}>
                            <Button
                                size={["sm", "md"]}
                                colorScheme="primary"
                                // background={"primary.900"}
                            >
                                Download CV
                            </Button>
                            <Button
                                variant={"outline"}
                                border={"1px solid #2C5282"}
                                color={"#2c5282"}
                                size={["sm", "md"]}
                            >
                                Contact
                            </Button>
                        </HStack>
                    </VStack>

                    {/* Profile pic */}
                    <VStack w={["100%", "100%", "50%"]} py={2} pb={[3, 3, 0]}>
                        <Image
                            src={demoImg}
                            width={200}
                            height={200}
                            borderRadius={"full"}
                            backgroundColor={"#b4b4b4"}
                            filter={"drop-shadow(2px 2px 4px #000)"}
                        ></Image>
                    </VStack>
                </Stack>

                {/* Skills */}
                <Skills data={student.skills} />

                {/* Achievements */}
                <Achievements />

                {/* Academics */}
                <Academics />

                {/* If current user is faculty then show the delete button! */}
                {/* Also if faculty && this student is verified then show button to remove verified */}
                <Stack
                    justifyContent={"start"}
                    w={"full"}
                    py={4}
                    px={[4, 6]}
                    my={2}
                    backgroundColor={"secondary.50"}
                    boxShadow={"md"}
                    borderRadius={"lg"}
                >
                    <Text
                        fontWeight={500}
                        fontSize={["22px", "24px", "26px", "32px"]}
                    >
                        Faculty options :{" "}
                    </Text>
                    <Stack alignItems={"flex-start"} my={2}>
                        <Stack
                            gap={0}
                            fontSize={["14px", "16px", "16px", "18px"]}
                        >
                            <Text color={"red.500"}>
                                Invalidate : student does not have skills he/she
                                has entered.
                            </Text>
                            <Text color={"red.500"}>
                                Delete : not a verified student/ student not
                                from your college.
                            </Text>
                        </Stack>
                        <HStack mt={2} justifyContent={"flex-end"} w={"full"}>
                            <Button colorScheme="blue" size={["sm", "md"]}>
                                Invalidate
                            </Button>
                            <Button colorScheme="red" size={["sm", "md"]}>
                                Delete{" "}
                            </Button>
                        </HStack>
                    </Stack>
                </Stack>
            </VStack>
        </>
    );
};

export default StudentProfile;

// Demo student data:
const studentData = [
    {
        id: 1,
        name: "Dayanand Jagtap",
        degree: "Bsc computer science",
        year: "3rd",
        portfolio: "https://dayanandjagtap.vercel.app",
        skills: ["JavaScript", "Java", "C"],
        achievements: "he kela ani te kela",
        academics: [9.4, 9.3, 9.45, 9.5, 9.18, 9.9],
        socials: {
            github: "github chi link",
            instagram: "instachi link",
            twitter: "tw link",
        },
        contact: {
            email: "email tyacha",
            phoneno: 478390143,
        },
    },
    {
        id: 2,
        name: "Saba Shaikh",
        degree: "Bsc computer science",
        year: "3rd",
        skills: ["Python", "Java", "C"],
    },
    {
        id: 3,
        name: "Anurag Dalali",
        degree: "Bsc computer science",
        year: "3rd",
        skills: ["C", "Java"],
    },
    {
        id: 4,
        name: "Parshuram Kanade",
        degree: "Bsc computer science",
        year: "3rd",
        skills: ["Java", "C"],
    },
    {
        id: 5,
        name: "Hitesh Sethiya",
        degree: "Bsc computer science",
        year: "3rd",
        skills: ["Java", "C"],
    },
    {
        id: 6,
        name: "Rahul Girmaji",
        degree: "Bsc computer science",
        year: "3rd",
        skills: ["Java", "C", "Python"],
    },
    {
        id: 7,
        name: "Pratiksha Dhawale",
        degree: "Bsc computer science",
        year: "3rd",
        skills: ["Java"],
    },
    {
        id: 8,
        name: "Kiran Akhade",
        degree: "Bsc computer science",
        year: "3rd",
        skills: ["Python", "C", "Java"],
    },
    {
        id: 9,
        name: "Shireen Tekade",
        degree: "Bsc computer science",
        year: "3rd",
        skills: ["Python", "Java", "C"],
    },
];
