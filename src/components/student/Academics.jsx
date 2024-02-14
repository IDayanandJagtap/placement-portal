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
            p={8}
            my={2}
            backgroundColor={"teal.50"}
            boxShadow={"lg"}
            borderRadius={"lg"}
        >
            <Text as={"h3"} fontSize={"32px"}>
                Academics :
            </Text>
            <HStack pl={10} py={2}>
                <Grid
                    templateColumns={"1fr 1fr"}
                    w={"full"}
                    rowGap={3}
                    fontSize={"large"}
                >
                    <GridItem>
                        1st sem :{" "}
                        <Text as={"span"} fontWeight={"bold"}>
                            {" "}
                            94.5
                        </Text>
                    </GridItem>
                    <GridItem>
                        2nd sem : <Text as={"span"}>94.5</Text>
                    </GridItem>
                    <GridItem>
                        3rd sem : <Text as={"span"}>94.5</Text>
                    </GridItem>
                    <GridItem>
                        4th sem : <Text as={"span"}>94.5</Text>
                    </GridItem>
                    <GridItem>
                        5th sem : <Text as={"span"}>94.5</Text>
                    </GridItem>
                    <GridItem>
                        6th sem : <Text as={"span"}>94.5</Text>
                    </GridItem>
                </Grid>
            </HStack>
        </Stack>
    );
};

export default Academics;
