import { Grid, GridItem, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const data = [
    { name: "Students", number: 80 },
    { name: "Companies", number: 10 },
    { name: "Jobs", number: 20 },
    { name: "Jobs", number: 20 },
];

const Dashboard = () => {
    return (
        <Stack px={6} py={4} h={"full"}>
            <Grid
                w={"100%"}
                templateColumns={"repeat(auto-fit, minmax(250px, 30% ))"}
                templateRows={"auto"}
                gap={5}
                justifyItems={"center"}
                alignItems={"center"}
                h={"full"}
            >
                {data.map((e, index) => {
                    return (
                        <GridItem key={index}>
                            <VStack
                                py={12}
                                px={16}
                                borderRadius={"sm"}
                                boxShadow={"lg"}
                                background={"#f1fff1"}
                            >
                                <Text
                                    fontSize={"40px"}
                                    fontWeight={"bold"}
                                    my={2}
                                >
                                    {e.number}+
                                </Text>
                                <Heading as={"h3"} fontSize={"18px"}>
                                    {e.name}
                                </Heading>
                            </VStack>
                        </GridItem>
                    );
                })}
            </Grid>
        </Stack>
    );
};

export default Dashboard;
