import { HStack, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Tag from "./utils/Tag";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <Stack background={"#f1f1f1"} minH={"100vh"} py={8}>
            {/* Hero heading */}
            <Heading as={"h1"} textAlign={"center"}>
                Explore !!
            </Heading>

            <Stack p={10} flexDirection={"row"} columnGap={10}>
                <Stack w={"75%"} p={4} background={"gray.200"} rowGap={6}>
                    <Heading as={"h2"} my={4}>
                        Jobs
                    </Heading>

                    {demoJobs.map((e) => {
                        return (
                            <Stack
                                flexDirection={"column"}
                                p={6}
                                boxShadow={"md"}
                                background={"white"}
                                borderRadius={"md"}
                                cursor={"pointer"}
                                onClick={() => {
                                    navigate("/jobs/12343");
                                }}
                            >
                                <Heading
                                    as={"h3"}
                                    fontWeight={"semibold"}
                                    fontSize={"24px"}
                                >
                                    {e.companyName}
                                </Heading>
                                <Text as={"p"} pl={3}>
                                    {e.jobDescription}
                                </Text>

                                <Text as={"p"} mt={5} fontSize={"18px"}>
                                    Expected Skills :
                                </Text>
                                <HStack flexWrap={"wrap"}>
                                    {e.expectedSkills.map((skill) => {
                                        return <Tag name={skill} />;
                                    })}
                                </HStack>
                            </Stack>
                        );
                    })}
                </Stack>
                <Stack
                    w={"25%"}
                    borderRadius={"md"}
                    background={"white"}
                    p={"4"}
                    maxH={"60vh"}
                >
                    <Text as={"h2"} fontSize={"22px"} color={"blackAlpha.700"}>
                        Notifications
                    </Text>
                    <VStack
                        h={"full"}
                        justifyContent={"center"}
                        border={"2px solid #A0AEC0"}
                        borderRadius={"sm"}
                    >
                        <Text color={"gray.500"}>No new notifications</Text>
                    </VStack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Home;

const demoJobs = [
    {
        jobId: 1,
        companyName: "Company Name",
        jobDescription:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam dolor, magnam officiis voluptate deserunt? Distinctio voluptates non fugiat et, voluptate tempora vitae natus, totam accusantium quod provident tempore? Enim harum nisi fuga non autem illum, eos vel officiis necessitatibus corporis sequi facere voluptatibus assumenda ea repellendus maxime. Incidunt, voluptas!",
        expectedSkills: ["JavaScript", "React", "Cloud", "Hosting"],
    },
    {
        jobId: 12,
        companyName: "Company name",
        jobDescription:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam dolor, magnam officiis voluptate deserunt? Distinctio voluptates non fugiat et, voluptate tempora vitae natus, totam accusantium quod provident tempore? Enim harum nisi fuga non autem illum, eos vel officiis necessitatibus corporis sequi facere voluptatibus assumenda ea repellendus maxime. Incidunt, voluptas!",
        expectedSkills: ["JavaScript", "React", "Cloud", "Hosting"],
    },
    {
        jobId: 123,
        companyName: "Company",
        jobDescription:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam dolor, magnam officiis voluptate deserunt? Distinctio voluptates non fugiat et, voluptate tempora vitae natus, totam accusantium quod provident tempore? Enim harum nisi fuga non autem illum, eos vel officiis necessitatibus corporis sequi facere voluptatibus assumenda ea repellendus maxime. Incidunt, voluptas!",
        expectedSkills: ["JavaScript", "React", "Cloud", "Hosting"],
    },
    {
        jobId: 1234,
        companyName: "Company",
        jobDescription:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam dolor, magnam officiis voluptate deserunt? Distinctio voluptates non fugiat et, voluptate tempora vitae natus, totam accusantium quod provident tempore? Enim harum nisi fuga non autem illum, eos vel officiis necessitatibus corporis sequi facere voluptatibus assumenda ea repellendus maxime. Incidunt, voluptas!",
        expectedSkills: ["JavaScript", "React", "Cloud", "Hosting"],
    },
    {
        jobId: 12345,
        companyName: "Company",
        jobDescription:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam dolor, magnam officiis voluptate deserunt? Distinctio voluptates non fugiat et, voluptate tempora vitae natus, totam accusantium quod provident tempore? Enim harum nisi fuga non autem illum, eos vel officiis necessitatibus corporis sequi facere voluptatibus assumenda ea repellendus maxime. Incidunt, voluptas!",
        expectedSkills: ["JavaScript", "React", "Cloud", "Hosting"],
    },
];
