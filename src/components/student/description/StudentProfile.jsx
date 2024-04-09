import {
    Button,
    HStack,
    Stack,
    Text,
    VStack,
    useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Skills, Achievements, Academics, Profile } from "./";
import "../../../global.css";
import { UserContext } from "../../../contextApi/UserContext";
import { StudentContext } from "../../../contextApi/StudentContext";

const StudentProfile = ({ studentInfo }) => {
    const [student, setStudent] = useState({
        name: "",
        year: "",
        degree: "",
        skills: [],
        resumeUrl: "",
        achievements: "",
        academics: Array(6).fill(0),
        contact: { github: "", linkedin: "", twitter: "" },
    });
    const { id } = useParams();
    const toast = useToast();

    // states and functions from context
    const { userType } = useContext(UserContext);
    const { getStudentById } = useContext(StudentContext);

    // fetch here from db
    useEffect(() => {
        // don't write async effects instead write async function here and call it immediately
        let stud;
        if (id) {
            // make a db call till then wait
            let response;
            const getInfo = async () => {
                response = await getStudentById(id);
                console.log(response);
                if (response.success === false) {
                    toast({
                        title: "Unable to fetch the info",
                        duration: 3000,
                        status: "error",
                    });

                    stud = student;
                } else {
                    stud = response.data;
                }
                setStudent(stud);
            };
            getInfo();
        } else {
            setStudent(studentInfo);
        }
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
                mb={[8, 8, 8, 0]}
            >
                {/* Main profile */}
                <Profile student={student} />

                {/* Skills */}
                <Skills skills={student.skills} />

                {/* Achievements */}
                <Achievements achievements={student.achievements} />

                {/* Academics */}
                <Academics academics={student.academics} />

                {/* If current user is faculty then show the delete button! */}
                {/* Also if faculty && this student is verified then show button to remove verified */}
                {userType === "faculty" && (
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
                                    Invalidate : student does not have skills
                                    he/she has entered.
                                </Text>
                                <Text color={"red.500"}>
                                    Delete : not a verified student/ student not
                                    from your college.
                                </Text>
                            </Stack>
                            <HStack
                                mt={2}
                                justifyContent={"flex-end"}
                                w={"full"}
                            >
                                <Button colorScheme="blue" size={["sm", "md"]}>
                                    Invalidate
                                </Button>
                                <Button colorScheme="red" size={["sm", "md"]}>
                                    Delete{" "}
                                </Button>
                            </HStack>
                        </Stack>
                    </Stack>
                )}
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
