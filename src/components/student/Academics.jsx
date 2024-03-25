import {
    Grid,
    GridItem,
    HStack,
    ListItem,
    Stack,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const Academics = () => {
    return (
        <Stack
            justifyContent={"start"}
            w={"full"}
            py={4}
            px={[4, 6]}
            my={2}
            backgroundColor={"secondary.50"}
            boxShadow={"md"}
            borderRadius={"lg"}
            id="academics"
        >
            <Text
                as={"h3"}
                fontWeight={500}
                fontSize={["22px", "24px", "26px", "32px"]}
            >
                Academics :
            </Text>
            <HStack pl={[0, 0, 10]} py={[1, 1, 3]}>
                <Grid
                    templateColumns={"1fr 1fr"}
                    w={"full"}
                    rowGap={3}
                    fontSize={["14px", "16px", "16px", "18px"]}
                >
                    <GridItem>
                        1st sem :{" "}
                        <Text as={"span"} fontWeight={"500"}>
                            {" "}
                            94.5
                        </Text>
                    </GridItem>
                    <GridItem>
                        2nd sem :{" "}
                        <Text as={"span"} fontWeight={"500"}>
                            94.5
                        </Text>
                    </GridItem>
                    <GridItem>
                        3rd sem :{" "}
                        <Text as={"span"} fontWeight={"500"}>
                            94.5
                        </Text>
                    </GridItem>
                    <GridItem>
                        4th sem :{" "}
                        <Text as={"span"} fontWeight={"500"}>
                            94.5
                        </Text>
                    </GridItem>
                    <GridItem>
                        5th sem :{" "}
                        <Text as={"span"} fontWeight={"500"}>
                            94.5
                        </Text>
                    </GridItem>
                    <GridItem>
                        6th sem :{" "}
                        <Text as={"span"} fontWeight={"500"}>
                            94.5
                        </Text>
                    </GridItem>
                </Grid>
            </HStack>
        </Stack>
    );
};

export default Academics;
