import { Grid, GridItem, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";

const UpdateAcademics = () => {
    return (
        <Stack h={"full"} p={4}>
            <Text as={"h2"} fontWeight={"semibold"} fontSize={"24px"}>
                Academic details
            </Text>
            <Grid
                templateColumns={"repeat(2, 1fr)"}
                columnGap={16}
                rowGap={8}
                mt={4}
            >
                <GridItem>
                    <Text>1st sem : </Text>
                    <Input
                        type="number"
                        border={"2px solid #E2E8F0"}
                        placeholder="8.80"
                    ></Input>
                </GridItem>
                <GridItem>
                    <Text>2nd sem : </Text>
                    <Input
                        type="number"
                        border={"2px solid #E2E8F0"}
                        placeholder="8.80"
                    ></Input>
                </GridItem>
                <GridItem>
                    <Text>3rd sem : </Text>
                    <Input
                        type="number"
                        border={"2px solid #E2E8F0"}
                        placeholder="8.80"
                    ></Input>
                </GridItem>
                <GridItem>
                    <Text>4th sem : </Text>
                    <Input
                        type="number"
                        border={"2px solid #E2E8F0"}
                        placeholder="8.80"
                    ></Input>
                </GridItem>
                <GridItem>
                    <Text>5th sem : </Text>
                    <Input
                        type="number"
                        border={"2px solid #E2E8F0"}
                        placeholder="8.80"
                    ></Input>
                </GridItem>
                <GridItem>
                    <Text>6th sem : </Text>
                    <Input
                        type="number"
                        border={"2px solid #E2E8F0"}
                        placeholder="8.80"
                    ></Input>
                </GridItem>
            </Grid>
            <Text as={"p"} color={"red.500"} mt={4}>
                Please enter your marks correctly as your details will be
                verified by the faculty !
            </Text>
        </Stack>
    );
};

export default UpdateAcademics;
