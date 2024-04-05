import { Grid, GridItem, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const data = [
    { name: "Students", number: 80 },
    { name: "Companies", number: 10 },
    { name: "Jobs", number: 20 },
];

const Insights = () => {
    return (
        <Stack
            px={6}
            py={4}
            minH={["fit-content", "fit-content", "fit-content", "95vh"]}
        >
            <Grid
                w={"100%"}
                templateColumns={"repeat(auto-fit, minmax(250px, 30% ))"}
                templateRows={"auto"}
                gap={5}
                placeContent={"center"}
                h={"full"}
            >
                {data.map((e, index) => {
                    return (
                        <GridItem key={index} w={"full"}>
                            <VStack
                                py={12}
                                px={16}
                                w={"full"}
                                borderRadius={"sm"}
                                boxShadow={"lg"}
                                // background={"#f1ffff"}
                                background={"primary.50"}
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
            {/* space for mobile */}
            <Stack minH={"10vh"}></Stack>
        </Stack>
    );
};

export default Insights;
