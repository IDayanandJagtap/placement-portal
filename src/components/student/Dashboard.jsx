import { Button, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaLink, FaXTwitter } from "react-icons/fa6";
import {
    IoLogoGithub,
    IoLogoInstagram,
    IoCheckmarkSharp,
} from "react-icons/io5";
import demoImg from "../../assets/react.svg";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Academics from "./Academics";
import "../../global.css";
import logo from "../../../public/logo.jpeg";
const Dashboard = () => {
    const { id } = useParams();
    console.log(id);

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
                pt={10}
                w={"90%"}
                mx={"auto"}
                my={10}
                p={5}
                borderRadius={"lg"}
            >
                <HStack
                    w={"full"}
                    p={5}
                    my={2}
                    backgroundColor={"teal.50"}
                    borderRadius={"lg"}
                >
                    {/* Main info */}
                    <VStack
                        width={"full"}
                        alignItems={"start"}
                        justifyContent={"start"}
                        pl={"5"}
                    >
                        <Text as={"h1"} fontSize={"48px"}>
                            Dayanand Jagtap
                            {/* isVerified */}
                            {/* <IoCheckmarkSharp /> */}
                        </Text>
                        <Text
                            as={"h3"}
                            color={"gray.500"}
                            mt={"-15px"}
                            pl={1}
                            fontSize={"24px"}
                        >
                            Bsc Comp Science <Text as={"span"}>, 3rd year</Text>
                        </Text>

                        {/* Portfolio link */}
                        <HStack color={"blue.700"} mt={1} mb={2}>
                            <FaLink size={"22"} />
                            <Text as={"a"} fontSize={"22px"}>
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
                            <Button colorScheme="blue">Download CV</Button>
                            <Button variant={"outline"} colorScheme={"blue"}>
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
                <Skills />

                {/* Achievements */}
                <Achievements />

                {/* Academics */}
                <Academics />
            </VStack>
        </>
    );
};

export default Dashboard;

// Demo student data:

const data = [
    {
        imgUrl: "public/student/id",
        name: "DJ",
        clg: "AGC",
        degree: "BCS",
        year: 3,
        portfolio: "https://dayanandjagtap.vercel.app",
        tags: ["js", "ts", "c", "react"],
        bio: "I'm very good person and an excellent programmer!",
    },
    {
        imgUrl: "public/student/id",
        name: "Anurag",
        clg: "AGC",
        degree: "BCS",
        year: 3,
        portfolio: "https://dayanandjagtap.vercel.app",
        tags: ["js", "ts", "c", "react"],
        bio: "I'm very good person and an excellent programmer!",
    },
    {
        imgUrl: "public/student/id",
        name: "Saba",
        clg: "AGC",
        degree: "BCS",
        year: 3,
        portfolio: "https://dayanandjagtap.vercel.app",
        tags: ["js", "ts", "c", "react"],
        bio: "I'm very good person and an excellent programmer!",
    },
    {
        imgUrl: "public/student/id",
        name: "Parshu",
        clg: "AGC",
        degree: "BCS",
        year: 3,
        portfolio: "https://dayanandjagtap.vercel.app",
        tags: ["js", "ts", "c", "react"],
        bio: "I'm very good person and an excellent programmer!",
    },
];
