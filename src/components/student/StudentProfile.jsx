import {
    Button,
    ButtonGroup,
    HStack,
    Image,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaLink, FaXTwitter } from "react-icons/fa6";
import {
    IoLogoGithub,
    IoLogoInstagram,
    IoCheckmarkSharp,
    IoArrowBackOutline,
} from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";
import demoImg from "../../assets/react.svg";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Academics from "./Academics";
import "../../global.css";
import logo from "../../../public/logo.jpeg";

const StudentProfile = () => {
    const [student, setStudent] = useState({
        name: "",
        year: "",
        degree: "",
        skills: [],
    });
    const navigate = useNavigate();
    const { id } = useParams();
    // console.log(id);

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
                w={"100%"}
                mx={"auto"}
                py={20}
                px={"15%"}
                background={"#f1f1f1"}
                // borderRadius={"md"}
            >
                <Button
                    alignSelf={"start"}
                    background={"white"}
                    onClick={() => {
                        navigate("/students");
                    }}
                    // background={"blue.50"}
                >
                    <IoIosArrowRoundBack size={40} />
                </Button>

                <HStack
                    w={"full"}
                    p={5}
                    my={2}
                    backgroundColor={"white"}
                    boxShadow={"md"}
                    borderRadius={"md"}
                >
                    {/* Main info */}
                    <VStack
                        width={"full"}
                        alignItems={"start"}
                        justifyContent={"start"}
                        pl={1}
                    >
                        <Text as={"h1"} fontSize={"40px"}>
                            {student.name}
                            {/* isVerified */}
                            {/* <IoCheckmarkSharp /> */}
                        </Text>
                        <Text
                            as={"h3"}
                            color={"gray.500"}
                            mt={"-15px"}
                            pl={1}
                            fontSize={"20px"}
                        >
                            {student.degree}{" "}
                            <Text as={"span"}>, {student.year} year</Text>
                        </Text>

                        {/* Portfolio link */}
                        <HStack color={"blue.700"} mt={1} mb={2}>
                            <FaLink size={"20"} />
                            <Text as={"a"} fontSize={"20px"}>
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
                                <IoLogoInstagram
                                    size={24}
                                    className="hoverIcon"
                                />
                            </a>
                        </HStack>

                        {/* Buttons */}
                        <HStack mt={12}>
                            <Button
                                background={"blue.700"}
                                border={"1px solid #2C5282"}
                                color={"white"}
                                _hover={{
                                    color: "#2C5282",
                                    background: "transparent",
                                }}
                            >
                                Download CV
                            </Button>
                            <Button
                                variant={"outline"}
                                border={"1px solid #2C5282"}
                                color={"#2c5282"}
                            >
                                Contact
                            </Button>
                        </HStack>
                    </VStack>

                    {/* Profile pic */}
                    <VStack w={"30%"} py={2}>
                        <Image
                            src={demoImg}
                            width={200}
                            height={200}
                            borderRadius={"full"}
                            backgroundColor={"#b4b4b4"}
                            filter={"drop-shadow(2px 2px 4px #000)"}
                        ></Image>
                    </VStack>
                </HStack>

                {/* Skills */}
                <Skills data={student.skills} />

                {/* Achievements */}
                <Achievements />

                {/* Academics */}
                <Academics />
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
