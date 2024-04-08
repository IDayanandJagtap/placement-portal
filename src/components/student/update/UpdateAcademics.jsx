import { Grid, GridItem, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";

const UpdateAcademics = ({ formFields, setFormFields }) => {
    const handleOnInputChange = (e) => {
        const field = parseInt(e.target.name);
        const academics = formFields.academics;
        academics[field] = e.target.value;

        setFormFields({ ...formFields, academics: academics });
        console.log(formFields);
    };

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
                        name="0"
                        border={"2px solid #E2E8F0"}
                        placeholder="8.80"
                        fontSize={["14px", "16px"]}
                        value={formFields.academics[0]}
                        required
                        onChange={handleOnInputChange}
                    ></Input>
                </GridItem>
                <GridItem>
                    <Text>2nd sem : </Text>
                    <Input
                        type="number"
                        name="1"
                        border={"2px solid #E2E8F0"}
                        placeholder="8.80"
                        fontSize={["14px", "16px"]}
                        value={formFields.academics[1]}
                        onChange={handleOnInputChange}
                        required
                    ></Input>
                </GridItem>
                <GridItem>
                    <Text>3rd sem : </Text>
                    <Input
                        type="number"
                        name="2"
                        border={"2px solid #E2E8F0"}
                        placeholder="8.80"
                        fontSize={["14px", "16px"]}
                        value={formFields.academics[2]}
                        onChange={handleOnInputChange}
                    ></Input>
                </GridItem>
                <GridItem>
                    <Text>4th sem : </Text>
                    <Input
                        type="number"
                        name="3"
                        border={"2px solid #E2E8F0"}
                        placeholder="8.80"
                        fontSize={["14px", "16px"]}
                        value={formFields.academics[3]}
                        onChange={handleOnInputChange}
                    ></Input>
                </GridItem>
                <GridItem>
                    <Text>5th sem : </Text>
                    <Input
                        type="number"
                        name="4"
                        border={"2px solid #E2E8F0"}
                        placeholder="8.80"
                        fontSize={["14px", "16px"]}
                        value={formFields.academics[4]}
                        onChange={handleOnInputChange}
                    ></Input>
                </GridItem>
                <GridItem>
                    <Text>6th sem : </Text>
                    <Input
                        type="number"
                        name="5"
                        border={"2px solid #E2E8F0"}
                        placeholder="8.80"
                        fontSize={["14px", "16px"]}
                        value={formFields.academics[5]}
                        onChange={handleOnInputChange}
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
