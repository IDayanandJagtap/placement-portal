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

const Academics = ({ academics }) => {
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
                            {academics[0] !== 0 ? academics[0] : "Not provided"}
                        </Text>
                    </GridItem>
                    <GridItem>
                        2nd sem :{" "}
                        <Text as={"span"} fontWeight={"500"}>
                            {academics[1] !== 0 ? academics[1] : "Not provided"}
                        </Text>
                    </GridItem>
                    <GridItem>
                        3rd sem :{" "}
                        <Text as={"span"} fontWeight={"500"}>
                            {academics[2] !== 0 ? academics[2] : "Not provided"}
                        </Text>
                    </GridItem>
                    <GridItem>
                        4th sem :{" "}
                        <Text as={"span"} fontWeight={"500"}>
                            {academics[3] !== 0 ? academics[3] : "Not provided"}
                        </Text>
                    </GridItem>
                    <GridItem>
                        5th sem :{" "}
                        <Text as={"span"} fontWeight={"500"}>
                            {academics[4] !== 0 ? academics[4] : "Not provided"}
                        </Text>
                    </GridItem>
                    <GridItem>
                        6th sem :{" "}
                        <Text as={"span"} fontWeight={"500"}>
                            {academics[5] !== 0 ? academics[5] : "Not provided"}
                        </Text>
                    </GridItem>
                </Grid>
            </HStack>
        </Stack>
    );
};

export default Academics;
