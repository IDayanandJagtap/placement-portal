import { Grid, GridItem, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";

const UpdateAcademics = () => {
    return (
        <Stack
            w={"full"}
            py={[4]}
            px={[4, 6]}
            my={2}
            boxShadow={"md"}
            borderRadius={"lg"}
        >
            <Text
                as={"h2"}
                fontWeight={"semibold"}
                fontSize={["18px", "20px", "22px", "24px"]}
            >
                Academic details
            </Text>
            <Grid
                templateColumns={"repeat(2, 1fr)"}
                columnGap={[4, 4, 16]}
                rowGap={[4, 4, 8]}
                mt={4}
                fontSize={["14px", "16px", "18px"]}
            >
                <GridItem>
                    <Text>1st sem : </Text>
                    <Input
                        type="number"
                        border={"2px solid #E2E8F0"}
                        placeholder="8.80"
                        fontSize={["14px", "16px"]}
                    ></Input>
                </GridItem>
                <GridItem>
                    <Text>2nd sem : </Text>
                    <Input
                        type="number"
                        border={"2px solid #E2E8F0"}
                        placeholder="8.80"
                        fontSize={["14px", "16px"]}
                    ></Input>
                </GridItem>
                <GridItem>
                    <Text>3rd sem : </Text>
                    <Input
                        type="number"
                        border={"2px solid #E2E8F0"}
                        placeholder="8.80"
                        fontSize={["14px", "16px"]}
                    ></Input>
                </GridItem>
                <GridItem>
                    <Text>4th sem : </Text>
                    <Input
                        type="number"
                        border={"2px solid #E2E8F0"}
                        placeholder="8.80"
                        fontSize={["14px", "16px"]}
                    ></Input>
                </GridItem>
                <GridItem>
                    <Text>5th sem : </Text>
                    <Input
                        type="number"
                        border={"2px solid #E2E8F0"}
                        placeholder="8.80"
                        fontSize={["14px", "16px"]}
                    ></Input>
                </GridItem>
                <GridItem>
                    <Text>6th sem : </Text>
                    <Input
                        type="number"
                        border={"2px solid #E2E8F0"}
                        placeholder="8.80"
                        fontSize={["14px", "16px"]}
                    ></Input>
                </GridItem>
            </Grid>
            <Text
                as={"p"}
                color={"red.500"}
                mt={4}
                fontSize={["10px", "12px", "14px", "16px"]}
            >
                Please enter your marks correctly as your details will be
                verified by the faculty !
            </Text>
        </Stack>
    );
};

export default UpdateAcademics;
