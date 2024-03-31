import {
    Avatar,
    Button,
    Grid,
    HStack,
    Heading,
    Stack,
    Tag,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Approval = () => {
    const navigate = useNavigate();

    return (
        <Stack px={6} py={4} mb={[8, 8, 8, 4]}>
            <Heading
                as={"h2"}
                fontSize={["24px", "26px", "26px", "30px", "32px"]}
            >
                Approvals
            </Heading>

            <Stack
                borderRadius={"sm"}
                gap={6}
                my={4}
                flexDirection={["column", "column", "row"]}
                flexWrap={"wrap"}
                justifyContent={"space-around"}
            >
                {studentData.map((e) => {
                    return (
                        <Card
                            id={e.id}
                            key={e.id}
                            name={e.name}
                            degree={e.degree}
                            year={e.year}
                            avatarUrl={""}
                            userType={"Student"}
                            navigate={navigate}
                        />
                    );
                })}
                <Card
                    id={1}
                    name={"Dayanand Jagtap"}
                    userType={"Company"}
                ></Card>
            </Stack>
        </Stack>
    );
};

const Card = ({ id, name, degree, year, avatarUrl, navigate, userType }) => {
    return (
        <HStack
            gap={6}
            p={4}
            borderRadius={"md"}
            boxShadow={"md"}
            width={["fit-content", "fit-content", "400px"]}
            background={"primary.50"}
            position={"relative"}
            onClick={() => {
                navigate("/students/" + id);
            }}
        >
            <Tag
                position={"absolute"}
                right={-3}
                top={-2}
                variant={"subtle"}
                colorScheme="blue"
                borderRadius={"full"}
                size={["sm", "sm", "md"]}
            >
                {userType}
            </Tag>
            <Avatar size={["lg", "lg", "xl"]} src={avatarUrl} name={name} />
            <Stack w={"full"}>
                <Text
                    fontSize={["16px", "16px", "18px ", "20px"]}
                    fontWeight={"semibold"}
                >
                    {name}
                </Text>
                {degree && year && (
                    <Text fontSize={["12px", "14px", "16px"]}>
                        {degree} , {year} year
                    </Text>
                )}
                <HStack justifyContent={"end"} mt={"3"}>
                    <Button colorScheme="red" size={"sm"}>
                        Reject
                    </Button>
                    {/* {navigate && (
                        <Button
                            colorScheme="blue"
                            size={"sm"}
                            onClick={() => {
                                navigate("/student/" + id);
                            }}
                        >
                            View
                        </Button>
                    )} */}

                    <Button
                        colorScheme="green"
                        size={"sm"}
                        onClick={(e) => {
                            e.stopPropagation(); // same event handler on parent ...
                        }}
                    >
                        Approve
                    </Button>
                </HStack>
            </Stack>
        </HStack>
    );
};

const del = [1, 2, 3, 4, 5, 6, 7];
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

export default Approval;
