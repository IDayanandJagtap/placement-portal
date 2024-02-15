import {
    Box,
    Button,
    Checkbox,
    Grid,
    HStack,
    Input,
    InputGroup,
    InputRightAddon,
    InputRightElement,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import StudentCard from "./student/StudentCard";

const FetchLayout = ({ find }) => {
    return (
        <Stack p={5}>
            {/* Search bar */}
            <HStack justifyContent={"center"}>
                <InputGroup w={"50%"} size={"lg"}>
                    <Input
                        type="text"
                        placeholder="Search..."
                        variant={"outline"}
                        border={"2px solid #3182CE"}
                        // w={"50%"}
                    />
                    <InputRightElement w={"6rem"}>
                        <Button
                            size={"sm"}
                            colorScheme="blue"
                            // variant={"outline"}
                        >
                            Search
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </HStack>

            <HStack w={"full"} my={12} alignItems={"start"}>
                {/* Filter */}
                <Stack
                    w={"15%"}
                    // minH={"60vh"}
                    px={5}
                    py={2}
                    boxShadow={"lg"}
                    backgroundColor={"blue.200"}
                    // borderRight={"3px solid #b4b4b4"}
                >
                    <Text as={"h1"} fontSize={"30px"}>
                        Filters
                    </Text>
                    <Stack>
                        <Text fontSize={"20px"}>Skills : </Text>

                        {checkBoxes.map((element, index) => {
                            return (
                                <Checkbox key={index} variant={"ghost"}>
                                    {element}
                                </Checkbox>
                            );
                        })}
                    </Stack>

                    <HStack alignSelf={"flex-end"} justifySelf={"flex-end"}>
                        <Button
                            colorScheme="blue"
                            variant={"outline"}
                            size={"sm"}
                        >
                            Clear
                        </Button>
                    </HStack>
                </Stack>

                {/* Fetch here */}
                <Grid
                    w={"full"}
                    maxH={"120vh"}
                    overflowY={"scroll"}
                    mx={4}
                    p={5}
                    gap={5}
                    backgroundColor={"blue.400"}
                    boxShadow={"lg"}
                    templateColumns={"1fr 1fr"}
                >
                    {studentData.map((e) => {
                        return (
                            <StudentCard
                                key={e.id}
                                id={e.id}
                                name={e.name}
                                degree={e.degree}
                                year={e.year}
                                skills={e.skills}
                            />
                        );
                    })}
                </Grid>
            </HStack>
        </Stack>
    );
};

const checkBoxes = ["C", "C++", "Java", "JavaScript", "Python"];

const studentData = [
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

export default FetchLayout;
