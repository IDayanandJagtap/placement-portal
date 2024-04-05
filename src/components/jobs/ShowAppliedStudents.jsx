import { Grid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { StudentCard } from "../student";

const ShowAppliedStudents = () => {
    return (
        <Stack p={[3, 4, 4, 4, 6]}>
            <Text
                as={"h2"}
                fontWeight={"500"}
                fontSize={["18px", "18px", "22px", "26px"]}
                my={4}
            >
                Applicants :{" "}
            </Text>
            <Grid
                w={"full"}
                gap={5}
                overflow={"scroll"}
                templateColumns={["1fr", "1fr", "1fr 1fr"]}
            >
                {data.map((student) => {
                    return <StudentCard key={student.id} student={student} />;
                })}
            </Grid>
            )
        </Stack>
    );
};

const data = [
    {
        id: 1,
        name: "Dayanand Jagtap",
        degree: "Bsc computer science",
        year: "3rd",
        skills: ["JavaScript", "Java", "C"],
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
        name: "Anurag Dalal",
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

export default ShowAppliedStudents;
